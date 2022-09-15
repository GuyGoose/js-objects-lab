const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
        { name : 'Pat Smith', address : '1 Main Street'},
        { name : 'Sheila Dwyer', address : '2 High Street'}
      ],
    type : { 
        make: 'Toyota',
        model: 'Corolla',
        cc: '1.8',
    },
    registration : { 
        year: '201',
        code: 'WD',
        number: '1058',
    }
  };

  aCar.mileage = 10000 ;
  aCar.colour = {
    exterior : 'Red',
    interior : {
        texture : 'leather',
        shade : 'cream'
    }
  }


  
  console.log(aCar.owner);
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log('Reg. = ' + aCar.registration['year'] + '-' + aCar.registration['code'] + '-' + aCar.registration['number']);
  console.log('It is a ' + aCar.colour['exterior'] + ' car, ' + aCar.mileage + ' mileage, with a ' + aCar.colour.interior['texture'] + ' interior.')
  console.log('First owner : ' + aCar.previous_owners[0].name )