import { Controller, Delete, Get, Post, Put, Query, Bind, HttpStatus, Res } from '@nestjs/common';
import { Request } from 'express';
import { HttpCode } from '@nestjs/common';
import { Header } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateCatDto } from 'src/create-cat.dto';
import { UpdateCatDto } from 'src/put-cat.dto';
import { Response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    catsService: any;

    constructor(catsService: any) {
      this.catsService = catsService;
    }

    @Post()
    @Bind(Body())
    async create(createCatDto: any) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll() {
        return this.catsService.findAll();
    }

    @Post()
    @HttpCode(204) //Código de status
    @Header('Cache-Control', 'none') //especificar um cabeçalho de resposta customizado
    creat(): string{
        return 'This action adds a new cat';
    }

    // @Get()
    // findAll():string{
    //     return 'This action returns all cats';
    //}

    //Typescript
    // @Post()
    // @Bind(Body())
    // create(_createCatDto: any) {
    //   return 'This action adds a new cat';
    // }
    //  @Get()
    // @Bind(Query())
    // findAll(query) {
    //   console.log(query);
    //   return `This action returns all cats (limit: ${query.limit} items)`;
    // }
    //  @Get(':id')
    // @Bind(Param('id'))
    // findOne(id: any) {
    //   return `This action returns a #${id} cat`;
    // }
    //  @Put(':id')
    // @Bind(Param('id'), Body())
    // update(id: any, _updateCatDto: any) {
    //   return `This action updates a #${id} cat`;
    // }
    //  @Delete(':id')
    // @Bind(Param('id'))
    // remove(id: any) {
    //   return `This action removes a #${id} cat`;
    // }

    //JavaScript
    // @Get()
    // @Redirect('https://nestjs.com', 301) //Para redirecionar uma resposta a um URL específico

    // @Get(':id')
    // findOne(@Param() params): string {
    //     console.log(params.id);
    //     return `This action returns a #${params.id} cat`;
    // }
    //OR
    // @Get(':id')
    // findOne(@Param('id') id: string): string {
    //     return `This action returns a #${id} cat`;
    // }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    //     return `This action updates a #${id} cat`;
    //  }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return `This action removes a #${id} cat`;
    // }

    // @Get()
    // async findAll(): Promise<any[]> { //Assincronicidade
    //     return [];
    // }
    //OR
    // @Get()
    // findAll(): Observable<any[]> {
    //   return of([]);
    // }

    // @Post()
    // async create(@Body() createCatDto: CreateCatDto) {
    //     return 'This action adds a new cat';
    // }

    //Typescript
    //objeto de resposta específico da biblioteca
    // @Post()
    // @Bind(Res(), Body())
    // create(res, createCatDto) {
    //   res.status(HttpStatus.CREATED).send();
    // }

    // @Get()
    // @Bind(Res())
    // findAll(res) {
    //    res.status(HttpStatus.OK).json([]);
    // }

}
