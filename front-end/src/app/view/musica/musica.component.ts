import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { DatatableComponent } from 'src/app/components/datatable/datatable.component';
import { IArtista } from 'src/app/domain/artista-model';
import { IMusica, Musica } from 'src/app/domain/musica-model';
import { IAlbum } from 'src/app/domain/album-model';
import { ConstantesUtil } from 'src/app/util/ConstantesUtil';
import { MusicaService } from 'src/app/services/musica.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css'],
  providers: [ConfirmationService]
})
export class MusicaComponent implements OnInit {

  @ViewChild('datatable')
  public datatableComponent: DatatableComponent;
  
  @ViewChild('fileUpload')
  public fileUpload: ElementRef;

  @ViewChild('fileUpload2')
  public fileUpload2: ElementRef;

  public file: File;
  public file2: File;

  public rowSelected: IMusica = new Musica();
  public musica: IMusica = new Musica();

  public dropdownGeneros = ConstantesUtil.GENEROS;

  mockArtista: IArtista[] = [{
    "foto": "",
    "nome": "Fernando Oliveira", 
    "instagram": "https://www.instagram.com/", 
    "facebook": "https://www.facebook.com/", 
    "wikipedia": "https://pt.wikipedia.org/", 
    "twitter": "https://twitter.com/", 
    "biografia": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus odio. Maecenas consectetur enim nisl, id lacinia risus auctor id. Vestibulum a nibh nisl. Nunc hendrerit lorem quis metus suscipit, vel malesuada erat ullamcorper. Nulla ac ultrices magna. Pellentesque vitae pharetra lectus. Nulla arcu libero, tempor quis orci nec, tempor maximus quam. Ut augue velit, hendrerit et imperdiet non, vulputate quis orci.", 
    "albuns": [
      {"id": 0, "foto": "", "nome": "", "dataDeLancamento": new Date(), musicas: [
        {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
        {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
        {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
        {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
      ]},
      {"id": 0, "foto": "", "nome": "", "dataDeLancamento": new Date(), musicas: [
        {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
        {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
        {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
        {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
      ]}, 
    ]
  }];

  mockAlbum: IAlbum[] = [
    {"id": 0, "foto": "", "nome": "", "dataDeLancamento": new Date(), musicas: [
      {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
      {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
      {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
      {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
    ]},
    {"id": 0, "foto": "", "nome": "", "dataDeLancamento": new Date(), musicas: [
      {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
      {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
      {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
      {"id": 0, "foto": "", "nome": "", "tempoDaMusica": "", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
    ]}
  ];

  mockMusica: IMusica[] = [
    {"id": 0, "foto": "data:image/jpeg;base64,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", 
    "nome": "red sand", "genero": "Pop", "tempoDaMusica": "2:30", "dataDeLancamento": new Date(), "numeroDeVotacoes": 10},
    {"id": 1, "foto": "data:image/jpeg;base64,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", 
    "nome": "triangle up", "genero": "Forró", "tempoDaMusica": "4:50", "dataDeLancamento": new Date(), "numeroDeVotacoes": 5}
  ];

  public pesquisar: string = "";
  public displayCadastrarMusica: boolean = false;
  public displayEditarMusica: boolean = false;
  public displayDetalharMusica: boolean = false;
  
  constructor(private router: Router,
              private confirmationService: ConfirmationService,
              private musicaService: MusicaService) { }

  ngOnInit(): void {
  }

  onRowSelect(event: any) {
    this.rowSelected = event;
  }

  uploadFile(){
    this.fileUpload.nativeElement.click();
  }

  uploadFile2(){
    this.fileUpload2.nativeElement.click();
  }

  setFileData(event, entity: any, field: string, isImage: boolean): Promise<any> {
    this.file = event.target.files[0].name;
    return new Promise((resolve, reject) => {
        if (event && event.target && event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (isImage && !/^image\//.test(file.type)) {
                reject(`File was expected to be an image but was found to be ${file.type}`);
            } else {
                this.toBase64(file, base64Data => {
                    entity[field] = "data:" + file.type + ";base64," + base64Data;
                    resolve(entity);
                });
            }
        } else {
            reject(`Base64 data was not set as file could not be extracted from passed parameter: ${event}`);
        }
    });
  }

  toBase64(file: File, cb: Function) {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = function (e: any) {
          const base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
          cb(base64Data);
      };
      fileReader.readAsDataURL(file);
  }

  onButtonClick(event: any) {
    if (!this.rowSelected) {
      return;
    }
    switch (event) {
        case 'criar':
          this.displayCadastrarMusica = this.displayCadastrarMusica == false;
        break;
        case 'remover':
          this.confirmationService.confirm({
              message: 'Tem certeza que deseja excluir a música selecionada ?',
              header: 'Atenção',
              acceptLabel: 'Sim',
              rejectLabel: 'Não',
              accept: () => {},
              reject: () => {}
          });
            break;
        case 'editar' :
            this.displayEditarMusica = this.displayEditarMusica == false;
            break;
        case 'detalhar':
          this.displayDetalharMusica = this.displayDetalharMusica == false;
          break;
        case 'avaliar':
          console.log("avaliar");
          this.musicaService.find(3).subscribe((response : HttpResponse<IMusica>) => {
            console.log(response.body);
          })
          break;
    }
    
  }
}