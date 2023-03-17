import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertiesService {
    private readonly properties: PropertiesDTO[] = [
        {
            name: "chair",
            price: 6,
            serialNumber: "f0",
            electronic: false,
            movable: true
        }
    ]
}
