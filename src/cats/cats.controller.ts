import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Request } from 'express';
import { HttpCode } from '@nestjs/common';
import { Header } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';


@Controller('cats')
export class CatsController {

    @Post()
    @HttpCode(204) //Código de status
    @Header('Cache-Control', 'none') //especificar um cabeçalho de resposta customizado
    creat(): string{
        return 'This action adds a new cat';
    }

    // @Get()
    // findAll():string{
    //     return 'This action returns all cats';
    // }

    @Get()
    findAll(@Query() query: ListAllEntities) {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }

    // @Get()
    // @Redirect('https://nestjs.com', 301) //Para redirecionar uma resposta a um URL específico

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
     }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
    //OR
    // @Get(':id')
    // findOne(@Param('id') id: string): string {
    //     return `This action returns a #${id} cat`;
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

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

}
