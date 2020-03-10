import { gql } from 'apollo-boost';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { TimelineModel } from '../models/timeline';
import { updateList } from 'update-data';
import { useEffect, useState } from 'react';

const GET_TIMELINES = gql`
  query GetTimelines($documentId: String!) {
    getTimelines(documentId: $documentId) {
      id
      date
      eventName
    }
  }
`;

const TIMELINE_CREATED = gql`
  subscription TimelineCreated {
    timelineCreated {
      id
      date
      eventName
    }
  }
`;

const update = (a: TimelineModel[], b: TimelineModel[]) => {
  return updateList<TimelineModel>(
    a,
    b,
    (docOld, docNew) => docNew.id === docOld.id,
    (docOld, docNew) => docNew.date > docOld.date,
  ).sort((a, b) => a.date.getTime() - b.date.getTime());
};

export const useTimelines = (documentId: string) => {
  const { loading, error, data: queryData } = useQuery(GET_TIMELINES, { variables: { documentId } });
  const { data: timelineData } = useSubscription(TIMELINE_CREATED);
  const [timelines, setTimelines] = useState<TimelineModel[]>([]);

  useEffect(() => {
    if (queryData?.getTimelines) {
      setTimelines(
        plainToClass<TimelineModel, TimelineModel>(TimelineModel, queryData.getTimelines),
      );
    }

    if (timelineData?.conversationCreated) {
      setTimelines(
        update(
          timelines,
          plainToClass<TimelineModel, TimelineModel>(TimelineModel, [
            timelineData.conversationCreated,
          ]),
        ),
      );
    }
  }, [timelineData, queryData]);

  return {
    loading,
    timelines,
  };
};
