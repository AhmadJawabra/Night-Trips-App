import { data } from '../api-mockup/trip.json';

 class DataProvider {
    get tripName(): string{
        return data.tripName;
    }
}

export const dataProvider = new DataProvider();