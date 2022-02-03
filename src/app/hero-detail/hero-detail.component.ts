import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {


  @Input() hero?: Hero;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
