var characters = ["Mario", "Donkey Kong", "Link", "Samus", "Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff", "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Palutena", "Pac-Man", "Robin", "Shulk", "Boswer Jr.", "Duck Hunt Duo", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra & Mythra", "You Win!", "You Win!", "You Win!", "You Win!", "You Win!", "You Win!", "You Win!", "You Win!", "You Win!", "You Win!", "You Win!"];


function myFunction() {
            var ele = document.getElementsByName('char');
            var kill = document.getElementById('kills').value;
            var spike = document.getElementById('spikes').value;
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked) {
//                var ans = ele[i] - 1 + kill - spike
//                var final = characters[ans]
                    check = ele[i].value-1+(kill-spike) 
                    document.getElementById("answer").innerHTML
                        =characters[check];
                }
            }
        }
