import { data } from '../api-mockup/trip.json';

class DataProvider {
    get tripName(): string {
        return data.tripName;
    }

    get tripDescription(): string {
        return data.tripDescription;
    }

    tripImage(imageName: string): string {
        return data.images.find((image: string) => image.includes(imageName))!;
    }
}

export const dataProvider = new DataProvider();
