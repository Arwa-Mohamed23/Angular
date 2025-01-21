import { Component, inject} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CounterproductService } from '../services/counterproduct.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  facart = faCartShopping;
  counterproduct:number = 0;
  counterService = inject(CounterproductService);

  ngOnInit(){
    this.counterService.getCounter().subscribe(res=> this.counterproduct=res);
  }
}
