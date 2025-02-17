import axios from 'axios';
import {
  Info,
  Result
} from '../conexionesApisWebPersonal/src/interfaces/typeDetailPerson';

const totalPagesResult = async (): Promise<Info> => {
  let response = await axios.get('https://rickandmortyapi.com/api/character');
  // console.log(response);
  return response.data.info;
};

const consultPages = async (urlConsult: string): Promise<Result[]> => {
  let response = await axios.get(urlConsult);
  return response.data.results;
};

const namesPerson = async (): Promise<Result[]> => {
  try {
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
  } catch (error) {
    console.log('error: ', error);
  }
};

const execution = async () => {
  let info = await totalPagesResult();
  let infoArray: [Info] = [info];
  //   console.log('infoArray:, ', infoArray);
  //   console.log('Number(infoArray[0].pages):, ', Number(infoArray[0].pages));
  let arraySaveDataConsult = [];
  if (infoArray[0].next != null) {
    for (let index = 0; index <= Number(infoArray[0].pages); index++) {
      let dataresponse: Result[] = await consultPages(
        'https://rickandmortyapi.com/api/character/?page=' + index
      );
      dataresponse.forEach((element) => {
        console.log(element.name);
      });
      //   arraySaveDataConsult.push(dataresponse);
      // console.log('dataresponse: ', dataresponse);
      // console.log('infoArray:, ', infoArray);
    }
  }
  //   console.log(
  //     'arraySaveDataConsult: ',
  //     arraySaveDataConsult.forEach((element) => {
  //       console.log('Name: ', element.name);
  //     })
  //   );
  console.log('finish all pages consult.');

  // let names:Result[] = await namesPerson();
  // let names1: NamePerson[] = [];
  // let allNames = names.forEach(element => {
  //     if (element.name){
  //     names1.push({name: element.name});
  //     // console.log(names);
  //     }
  //     console.log('all Names:', names);
  //     return names1;
  // });
  // console.log('2 all Names:', allNames);
  // console.log(names);
};

execution();
