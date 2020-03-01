import {differenceInDays} from 'date-fns';
import { COLORS } from '../common/colors';

export function useDateColor(date: Date, defaultColor: string): string {
  const days = differenceInDays(date, new Date());

  switch (true) {
    case days === 1 : {
      return COLORS.ORANGE;
    }

    case days <= 0 : {
      return COLORS.FIRE_ROSE;
    }

    default : {
      return defaultColor;
    }
  }
}