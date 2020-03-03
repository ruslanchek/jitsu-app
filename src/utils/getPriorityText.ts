import { EDocumentPriority } from '../models/document';
import { EPhrase } from '../locales/EPhrase';

export function getPriorityText(priority: EDocumentPriority): EPhrase {
  switch (priority) {
    case EDocumentPriority.High : {
      return EPhrase.Document_priority_High;
    }

    case EDocumentPriority.Medium : {
      return EPhrase.Document_priority_Medium;
    }

    case EDocumentPriority.Low : {
      return EPhrase.Document_priority_Low;
    }

    case EDocumentPriority.Default :
    default : {
      return EPhrase.Document_priority_Default;
    }
  }
}