import { Controller, Get, Post, Redirect, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  @Render('weboldal')
  Weboldal(){

  }
  @Get('vasarlas')
  @Render('vasarlas')
  Vasarlas(){
  
  }
  @Post()
  getWeboldal(@Res() response : Response) {
      return response.redirect('/vasarlas')
  }
}
