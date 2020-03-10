import { EDocumentStatus } from '../models/document';
import { EPhrase } from '../locales/EPhrase';

export function getStatusText(status: EDocumentStatus): EPhrase {
  switch (status) {
    case EDocumentStatus.InProgress : {
      return EPhrase.Document_status_In_progress;
    }

    case EDocumentStatus.Paused : {
      return EPhrase.Document_status_Paused;
    }

    case EDocumentStatus.Completed : {
      return EPhrase.Document_status_Completed;
    }

    case EDocumentStatus.Archived : {
      return EPhrase.Document_status_Archived;
    }

    case EDocumentStatus.Idle :
    default : {
      return EPhrase.Document_status_Idle;
    }
  }
}