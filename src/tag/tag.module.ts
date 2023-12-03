import {Module} from "@nestjs/common";
import {TagController} from "./tag.controller";
import {Tagservice} from "./tag.service";

@Module({
    imports: [],
    controllers:[TagController],
    providers: [Tagservice],
})
export class TagModule {}