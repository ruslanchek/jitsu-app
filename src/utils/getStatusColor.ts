import { COLORS } from '../common/colors';
import { EDocumentStatus } from '../models/document';

export function getStatusColor(status: EDocumentStatus): string {
  switch (status) {
    case EDocumentStatus.InProgress : {
      return COLORS.GRASS_GREEN;
    }

    case EDocumentStatus.Paused : {
      return COLORS.SMOKE;
    }

    case EDocumentStatus.Completed : {
      return COLORS.GREEN;
    }

    case EDocumentStatus.Archived : {
      return COLORS.SMOKE;
    }

    case EDocumentStatus.Idle :
    default : {
      return COLORS.SMOKE;
    }
  }
}