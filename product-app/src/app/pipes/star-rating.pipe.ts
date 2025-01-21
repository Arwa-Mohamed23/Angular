import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {
  transform(rate: number|undefined): string {
    if(!rate) return "Rate not falid";
    const maxStars = 5; 
    let result:string='';
    for(let i=1;i<=maxStars;i++){
      if(rate>=i){
        result+='<i class="fas fa-star"></i>'; 
      }else{
        result+='<i class="far fa-star"></i>';
      }
    }
    return result;
  }

}
