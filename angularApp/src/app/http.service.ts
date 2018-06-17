import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getOneTask();
    // this.getPokemon();
  }
  getTasks() {
    // let allTasksObservable = this._http.get('/tasks');
    // allTasksObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }
  getOneTask(id) {
    // let oneTaskObservable = this._http.get('/tasks/5acf8eba1c66de0174ecbf1c');
    // oneTaskObservable.subscribe(data => console.log("Got the task!", data))
    return this._http.get(`/tasks/${id}`)
  }
  deleteTask(id) {
    return this._http.delete(`/tasks/${id}`)
  }
  postTask(task) {
    return this._http.post('/tasks',task)
  }
  editTask(task) {
    return this._http.put(`/tasks/${task._id}`,task)
  }
  // getPokemon() {
  //   let _this = this;
  //   let pokemonObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  //   pokemonObservable.subscribe(data => {
  //     let chloro = data.abilities[0].ability.name;
  //     let overgrow = data.abilities[1].ability.name
  //     console.log(`Bulbasaur's abilities are ${chloro} and ${overgrow}.`);
  //     let sharing = _this._http.get(`https://pokeapi.co/api/v2/ability/${chloro}/`);
  //     sharing.subscribe(data => {
  //       console.log(`${data.pokemon.length} pokemon share the ${chloro} ability. They are as follows:`)
  //       for (let pokemon of data.pokemon) {
  //         let name = pokemon.pokemon.name
  //         let otherAbilities = _this._http.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  //         otherAbilities.subscribe(data => {
  //           console.log(`${name}, whose other abilities include...`);
  //           for (let ability of data.abilities) {
  //             if (ability.ability.name !== chloro) {
  //               console.log(ability.ability.name);
  //             }
  //           };
  //         });
  //       }
  //     });
  //   });
  // }
}