import {Injectable} from "@nestjs/common";

@Injectable()
export class Tagservice {
    findAll(): string[] {
        return ['dragons', 'coffee', 'weather'];
    }
}
