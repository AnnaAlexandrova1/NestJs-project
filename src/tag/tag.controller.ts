import {Controller, Get} from "@nestjs/common";
import {Tagservice} from "./tag.service";

@Controller('tags')
export class TagController {
    constructor(
        private readonly tagService: Tagservice,
    ) {
    }
@Get()
    findAll(){
    return this.tagService.findAll();
}
}
