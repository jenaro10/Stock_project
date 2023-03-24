export class CreatePropertyDTO {
    id: string;
    name: string;
    description: string;
    serialNumber?: string
    imageURL: string;
    price: number;
    movable: boolean;
    electronic: boolean;
}

