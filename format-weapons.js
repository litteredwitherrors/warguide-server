'use strict';

const fs = require('fs');
const data = fs.readFileSync('./weapons.json');

const weaponProfile = JSON.parse(data);

const formatCharacteristic = (c) => {
  return {
    "value": c["_"],
    "type": c["$"]["name"],
    "typeId": c["$"]["typeId"]
  }
}

let newWeaponArray = [];

weaponProfile.forEach(weapon => {
  let newWeaponProfile = weapon["$"];

  // switch(weapon["$"]["typeName"]) {
  //   case 'Weapon':
  //     newWeaponProfile.characteristics = weapon.characteristics[0].characteristic.map(formatWeaponCharacteristic);
  //     newWeaponArray.push(newWeaponProfile)
  //     fs.writeFileSync('./data/weapons-formatted.json', JSON.stringify(newWeaponArray, null, 2));
  //     break;
  //   case 'Unit':
  //     newWeaponProfile.characteristics = weapon.characteristics[0].characteristic.map(formatUnitCharacteristic);
  //     newWeaponArray.push(newWeaponProfile)
  //     fs.writeFileSync('./data/units-formatted.json', JSON.stringify(newWeaponArray, null, 2));
  //     break;
  // }
  
  if (weapon["$"]["typeName"] === "Weapon") {
    newWeaponProfile.characteristics = weapon.characteristics[0].characteristic.map(formatCharacteristic);
    newWeaponArray.push(newWeaponProfile)
    fs.writeFileSync('./data/weapons-formatted.json', JSON.stringify(newWeaponArray, null, 2));
  }
  if (weapon["$"]["typeName"] === "Unit") {
    newWeaponProfile.characteristics = weapon.characteristics[0].characteristic.map(formatCharacteristic);
    newWeaponArray.push(newWeaponProfile)
    fs.writeFileSync('./data/units-formatted.json', JSON.stringify(newWeaponArray, null, 2));
  }
  if (weapon["$"]["typeName"] === "Abilities") {
    newWeaponProfile.characteristics = weapon.characteristics[0].characteristic.map(formatCharacteristic);
    newWeaponArray.push(newWeaponProfile)
    fs.writeFileSync('./data/abilities-formatted.json', JSON.stringify(newWeaponArray, null, 2));
  }
  if (weapon["$"]["typeName"] === "Transport") {
    newWeaponProfile.characteristics = weapon.characteristics[0].characteristic.map(formatCharacteristic);
    newWeaponArray.push(newWeaponProfile)
    fs.writeFileSync('./data/transports-formatted.json', JSON.stringify(newWeaponArray, null, 2));
  }
});

// fs.writeFileSync('./data/weapons-formatted.json', JSON.stringify(newWeaponArray, null, 2));
