import { BUSINESS_HOURS } from '../data/bakeryData';

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
  }).format(amount);
}

export function getCurrentDayName(): 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' {
  const days: ('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[] = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  const now = new Date();
  return days[now.getDay()];
}

export function getStoreStatus(): { isOpen: boolean; statusText: string; timeDetail: string } {
  const now = new Date();
  const dayName = getCurrentDayName();
  const todayHours = BUSINESS_HOURS.find(h => h.day === dayName);

  if (!todayHours || todayHours.isClosed) {
    const isSundayOrMonday = dayName === 'Sunday' || dayName === 'Monday';
    return {
      isOpen: false,
      statusText: `Closed Today (${dayName})`,
      timeDetail: isSundayOrMonday ? 'Reopens Tuesday at 7:00 AM' : 'Reopens tomorrow at 7:00 AM'
    };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const openMinutes = 7 * 60; // 7:00 AM
  const closeMinutes = 18 * 60; // 6:00 PM Tue-Sat

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      statusText: 'Open Now',
      timeDetail: `Open until ${todayHours.close}`
    };
  } else if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      statusText: 'Closed Now',
      timeDetail: `Opens today at ${todayHours.open}`
    };
  } else {
    const reopensNext = (dayName === 'Saturday' || dayName === 'Sunday') ? 'Reopens Tuesday at 7:00 AM' : 'Reopens tomorrow at 7:00 AM';
    return {
      isOpen: false,
      statusText: 'Closed Now',
      timeDetail: reopensNext
    };
  }
}
