    var data = {
        music: [],
        video: [],
        podcast: []
    
    };
    
    function createRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      }
      





    for (var i = 0; i < 500; i++) {
        var language = (i % 2 === 0) ? "FR" : "EN";
        var min = 1450;
        var max = 54596;
    
        data.music.push({
            titre: createRandomString(Createvaluebetweenvalue(4,8)),
            artiste: createRandomString(5),
            studio: "partyjam",
            language: language,
            time: Math.round(Math.random =(max-min)+ min) ,                    // permet de generer des nombre aleatoire entre 0 et  500.
            daterealease: new Date(9, 29, 2026),
            album: "Partypool" + i
        });
    }
    
    for (var i = 0; i < data.music.length; i++) {
            console.log("titre: " + data.music[i].titre + " /artiste: " + data.music[i].artiste + " /Language: " + data.music[i].language + " /Time: " + data.music[i].time + "\n");
       
    }


