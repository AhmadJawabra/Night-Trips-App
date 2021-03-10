import { data } from '../api-mockup/trip.json';

class DataProvider {
    private static instance: DataProvider;

    private constructor() {}

    static getInstance(): DataProvider {
        if (!DataProvider.instance) DataProvider.instance = new DataProvider();

        return DataProvider.instance;
    }

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

export const dataProvider = DataProvider.getInstance();
