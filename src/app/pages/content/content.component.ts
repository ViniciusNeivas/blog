import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datafake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  pictureCover:string = '';
  @Input()
  contentTitle:string = '';
  @Input()
  contentDescription:string = '';
  private id:string | null = '1';
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null){
    const result = datafake.filter(article => article.id.toString() == id)[0]
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.pictureCover = result.pictureCover
    console.log(result);
    

}
}
