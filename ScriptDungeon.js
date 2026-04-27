// This section stores the different monster that can spawn to their tpye of dungeon
let monsterGroups = {
    Caves:["Spiders", "Bats", "Goblins", "Trolls", "Rats"],
    Mines:["Spiders", "Nomes", "Trolls", "Rats", "Zombies", "Rock Worms"],
    Crypts:["Skeletons", "Ghouls", "Wraiths", "Rats", "Mimics"],
    Ruins:["Orcs", "Slimes", "Mimics", "Mages", "Skeletons"],
    Labyrinth:["Hell Hounds", "Mimics","Ghost", "Golems", "Minotaurs"],
    City:["Living Armor", "Dragons", "Skeleton Knights", "Ghouls"],
    SpiderForest:["Giant Spiders", "Mummies", "Undead", "Golems"],
    GlowingLakes:["Water Spirits", "Water Weirds", "Golems", "Anglers", "Slimes"],
    DwarvenHalls:["Goblins", "Orcs", "Stone Giants", "Golems", "Living Armor"]
};

// This section stores the different type of loot that can be found inside the dungeon
let itemGroups = {
    WeaponsGrimoires:["Swords","Battle Axes", "Bows", "Daggers","Speirs", "Fire Grimoire", "Ice Grimoire"],
    ArmorShields:["Wood Shields", "Iron Shields", "Enchanted Shields", "Knight Armor Set", "Mythill Armor Set", "Enchanted Armor"],
    PotionsScrolls:["Health Potions", "Mana Potions", "Stamina Potions", "Fire Scrolls", "Teleporting Scrolls", "Summoning Scrolls"],
    ArtifactsLore:["Ancient Relics", "Idols", "Old Maps", "Journals", "Magic Tablets"],
    TreasuresCraftingMaterials:["Gold Coins", "Rings", "Monster Fangs", "Leather Scrap", "Enchanted Cloths"],
    OresGems:["Iron Ore", "Gold Ore", "Mythill Ore", "Ruby", "Diamonds", "Sapphires"]
};
// This is tells it to use the form from the page
let dungeonForm = document.getElementById("dungeonForm");

// This runs the form after the user hits the submit button
dungeonForm.onsubmit = buildDungeon;

// This is the function that runs after submitting the form
function buildDungeon(event){
    // This will stop the form from reseting the page and running
    event.preventDefault();

    // These are where all of the different values from the form
    let dungeonName = document.getElementById("txtDungeonName").value;
    let dungeonType = document.getElementById("ddlType").value;
    let biome = document.getElementById("ddlBiome").value;
    let difficulty = document.getElementById("ddlDifficulty").value;
    let trap = document.getElementById("ddlTrap").value;
    let lootType = document.getElementById("ddlLootType").value;
    let lootRarity = document.getElementById("ddlLootRarity").value;
    let monsterCount = parseInt(document.getElementById("numMonsters").value);
    let itemCount = parseInt(document.getElementById("numItems").value);

    // The message that is from the div
    let divMessage = document.getElementById("divMessage");

    // This'll make it look nice and remove any extra spaces
    dungeonName = dungeonName.trim();

    // This will check and make sure if the user left the name box empty or not
    if(dungeonName == ""){
        divMessage.innerHTML = "Please Enter a Dungeon name Before Submitting.";
        return;
    }

    // This'll make sure the name isn't to short and is long enough
    if(dungeonName.length < 3){
        divMessage.innerHTML = "The Dungeon name must be at least 3 characters long.";
        return;
    }

    // This will change and make sure the first letter of the name is uppercased
    dungeonName = dungeonName.charAt(0).toUpperCase() + dungeonName.slice(1).toLowerCase();

    // This will start the summary text for the dungeon
    let summaryText = "<h2>" + dungeonName + "</h2>";
    summaryText +="<p><strong>Type:</strong>" + dungeonType + "</p>";
    summaryText +="<p><strong>Biome:</strong>" + biome + "</p>";
    summaryText +="<p><strong>Difficulty:</strong>" + difficulty + "</p>";
    summaryText +="<p><strong>Trap:</strong>" + trap + "</p>";
    summaryText +="<p><strong>Loot:</strong>" + lootRarity + "</p>";

    // This will give the different messages based on the difficult the user choses
    if(difficulty == "Easy"){
        summaryText += "<p>This Dungeon is good for beginners.</p>";
    }
    else if (difficulty == "Medium"){
        summaryText += "<p>This dungeon has a great balanced of be challenging.</p>";
    }
    else if (difficulty == "Hard"){
        summaryText += "<p>This is a dangerours dungeon.</p>";
    }
    else{
        summaryText += "This dungeon is extremely deadly, good luck.</p>";
    }


    // This show the different monster that the user will see in the dungeon type they have choosen
    let selectedMonsters = monsterGroups[dungeonType];

    // The start of the text for the monsters
    let monsterText = "<h3>Monsters</h3>";

    // This is a loop that will add the different monsters to the list
    for(let i = 0; i < monsterCount; i++){
        let randomMonster = selectedMonsters[Math.floor(Math.random() * selectedMonsters.length)];
        monsterText += "<li>" + randomMonster + "</li>";
    }

    // This will close the monster list in the report
    monsterText += "</ul>";

    // This will show the item list from the users selected loot type
    let selectedItems = itemGroups[lootType];

    let itemText = "<h3>Items</h3><ul>";

    for (let i = 0; i < itemCount; i++){
        let randomItem = selectedItems[Math.floor(Math.random() * selectedItems.length)];
        itemText += "<li>" + randomItem + "</li>";
    }

    // This will close the item list 
    itemText += "</ul>";

    // This is the success message after building your dungeon
    divMessage.innerHTML = "Your Dungeon Floor was created successfully";

    // This makes it print the summary to the page
    document.getElementById("divDungeonOutPut").innerHTML = summaryText;

    document.getElementById("divMonsterList").innerHTML = monsterText;

    document.getElementById("divItemList").innerHTML = itemText;
}