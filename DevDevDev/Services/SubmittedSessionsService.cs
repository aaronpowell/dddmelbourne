using DevDevDev.Infrastructure;
using DevDevDev.Models;
using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevDevDev.Services
{
    public class SubmittedSessionsService : TableStorageServiceBase
    {

        private const string _sessionsTableName = "Sessions";
        static Random random = new Random();

        public SubmittedSessionsService()
            : base(_sessionsTableName)
        {
        }

        public VotingSessionsViewModel GetSessionsForVoting()
        {
            var viewModel = new VotingSessionsViewModel();
            var tableClient = GetTableClient();
            var sessionTable = tableClient.GetTableReference(_sessionsTableName);

            var sessionQuery =
                 (new TableQuery<SessionSubmission>()).Where(
                 TableQuery.GenerateFilterConditionForInt("Status", QueryComparisons.Equal, 1));

            var sessions = sessionTable.ExecuteQuery(sessionQuery).ToList();

            sessions = RandomPermutation(sessions).ToList();

            foreach (var sessionSubmission in sessions)
            {
                var session = new VotingSubmissionViewModel()
                {
                    SessionId = sessionSubmission.RowKey,
                    SessionTitle = sessionSubmission.SessionTitle,
                    SessionAbstract = sessionSubmission.SessionAbstract.FormatForHtml(),
                    PresenterName = sessionSubmission.PresenterName,
                    PresenterTwitterAlias = sessionSubmission.PresenterTwitterAlias,
                    PresenterWebsite = sessionSubmission.PresenterWebsite,
                    PresenterBio = sessionSubmission.PresenterBio,
                    RecommendedAudience = sessionSubmission.RecommendedAudience
                };
                viewModel.SessionsToVoteFor.Add(session);

            }
            return viewModel;
        }

        public SubmittedSessionsViewModel GetSubmittedSessions()
        {
            var tableClient = GetTableClient();
            var sessionTable = tableClient.GetTableReference(_sessionsTableName);
            var sessionQuery = (new TableQuery<SessionSubmission>()).Where(TableQuery.GenerateFilterConditionForInt("Status", QueryComparisons.Equal, 1));

            var sessions = sessionTable.ExecuteQuery(sessionQuery).ToList();

            var viewModel = new SubmittedSessionsViewModel();

            foreach (var sessionSubmission in sessions)
            {
                var session = new SessionSubmissionViewModel
                {
                    SessionTitle = sessionSubmission.SessionTitle,
                    SessionAbstract = sessionSubmission.SessionAbstract.FormatForHtml(),
                    PresenterName = sessionSubmission.PresenterName,
                    PresenterTwitterAlias = sessionSubmission.PresenterTwitterAlias,
                    PresenterWebsite = sessionSubmission.PresenterWebsite,
                    PresenterBio = sessionSubmission.PresenterBio,
                    RecommendedAudience = sessionSubmission.RecommendedAudience
                };

                viewModel.Sessions.Add(session);

            }
            return viewModel;
        }

        static IEnumerable<T> RandomPermutation<T>(IEnumerable<T> sequence)
        {
            var retArray = sequence.ToArray();

            for (var i = 0; i < retArray.Length - 1; i += 1)
            {
                var swapIndex = random.Next(i, retArray.Length);
                if (swapIndex != i)
                {
                    var temp = retArray[i];
                    retArray[i] = retArray[swapIndex];
                    retArray[swapIndex] = temp;
                }
            }

            return retArray;
        }
    }
}