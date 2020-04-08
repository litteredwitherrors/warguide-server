'use strict';

const fs = require('fs');
const parser = require('xml2js').Parser();

const armyData = './data/wh40k/T\'au\ Empire.cat';

fs.readFile(armyData, (err, data) => {
  if (err) throw err;
  parser.parseString(data, (err, result) => {
    const first = result.catalogue.publications[0].publication[0].$.name
    const second = result.catalogue.sharedProfiles[0].profile
    if (err) throw err;
    console.log(second);
    fs.writeFile('weapons.JSON', JSON.stringify(second, null, 2), () => { if (err) throw err; })
    // fs.writeFile('tau.JSON', toString, (err) => {
    //   if (err) throw err;
    //   console.log('Successfully converted XML to JSON!');
    //   console.log(toString.catalogue);
    // });

  });
});


characteristics[0].characteristic.map(formatCharacteristic)
newWeapon = oldWeapon["$"]

newWeapon.characteristics = oldWeapon.characteristics[0].characteristic.map(formatCharacteristic)

const formatCharacteristic = (c) => {

  return {
    "value": c["_"],
    "name": c["$"]["name"],
    "typeId": c["$"]["typeId"]
  }
}

// var my_id = "asdfasdf"
// newWeapons.find((e) => e.id === my_id)
