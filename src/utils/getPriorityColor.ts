import { COLORS } from '../common/colors';
import { EDocumentPriority } from '../models/document';

export function getPriorityColor(priority: EDocumentPriority): string {
  switch (priority) {
    case EDocumentPriority.High : {
      return COLORS.FIRE_ROSE;
    }

    case EDocumentPriority.Medium : {
      return COLORS.YELLOW;
    }

    case EDocumentPriority.Low : {
      return COLORS.GRASS_GREEN;
    }

    case EDocumentPriority.Default :
    default : {
      return COLORS.SMOKE;
    }
  }
}