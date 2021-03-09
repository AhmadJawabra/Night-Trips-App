import { data } from '../api-mockup/trip.json';

class DataProvider {
    get tripName(): string {
        return data.tripName;
    }

    get tripDescription(): string {
        return data.tripDescription;
    }

    get tripImages(): string[] {
        return data.images;
    }
}

export const dataProvider = new DataProvider();
