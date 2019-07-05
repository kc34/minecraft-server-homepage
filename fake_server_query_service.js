class FakeServerQueryService {
    calls = 0;
    fakeResponses = [mockModdedServerResp, vanillaModdedServerResp];

    query(serverAddress) {
        var fakeResponse = mockOfflineResp;
        if (this.calls < this.fakeResponses.length) {
            fakeResponse = this.fakeResponses[this.calls];
            this.calls += 1;
        }
        return {
            then: function(callback) {
                setTimeout(() => {
                    callback({
                        data: fakeResponse,
                        status: 200
                    });
                }, 1000);
            }
        }
    }
}

const mockModdedServerResp = {
    "ip": "24.6.170.127",
    "port": 25565,
    "motd": {
        "raw": ["A Minecraft Server"],
        "clean": ["A Minecraft Server"],
        "html": ["A Minecraft Server"]
    },
    "players": {
        "online": 0,
        "max": 20
    },
    "version": "1.12.2",
    "online": true,
    "protocol": 340,
    "mods": {
        "names": ["actuallyadditions","actuallybaubles","advanced_machines","advanced_solar_panels","ae2wtlib","akashictome","appleskin","appliedenergistics2","architecturecraft","aroma1997core","aroma1997sdimension","astralsorcery","autoreglib","badwithernocookiereloaded","base","baubles","bdlib","bedpatch","betterbuilderswands","bibliocraft","bigreactors","binniecore","binniedesign","biomesoplenty","blockcraftery","bloodmagic","bookshelf","botania","botany","brandonscore","buildcraftbuilders","buildcraftcompat","buildcraftcore","buildcraftenergy","buildcraftfactory","buildcraftlib","buildcraftrobotics","buildcraftsilicon","buildcrafttransport","careerbees","cctweaked","chameleon","chesttransporter","chisel","chiselsandbits","clumps","codechickenlib","cofhcore","cofhworld","compactsolars","computercraft","conarm","cookingforblockheads","crafttweaker","crafttweakerjei","danknull","darkutils","deepresonance","diethopper","dirt2path","draconicevolution","eleccore","eleccoreloader","endercore","enderio","enderiobase","enderioconduits","enderioconduitsappliedenergistics","enderioconduitsopencomputers","enderioconduitsrefinedstorage","enderiointegrationforestry","enderiointegrationtic","enderiointegrationticlate","enderiomachines","enderiopowertools","enderstorage","engineersdoors","engineersworkshop","environmentaltech","etlunar","exchangers","extrabees","extratrees","extrautils2","fastbench","fencejumper","flatcoloredblocks","fluxnetworks","FML","foamfix","foamfixcore","forestry","forge","forgelin","forgemultipartcbe","ftbbackups","ftbguides","ftblib","ftbutilities","gendustry","genetics","gravisuite","guideapi","harvest","harvestcraft","ic2","immersivecables","immersiveengineering","immersivepetroleum","industrialforegoing","industrialwires","initialinventory","integrationforegoing","inventorytweaks","ironbackpacks","ironchest","jei","jeibees","journeymap","letsencryptcraft","longfallboots","lostcities","magicbees","mantle","mcjtylib_ng","mcmultipart","mcp","microblockcbe","minecraft","minecraftmultipartcbe","minetogetherserver","minetogether","modtweaker","morpheus","morphtool","mrtjpcore","mtlib","mysticallib","natura","naturescompass","neid","nice","notenoughwands","openblocks","openmods","openmodscore","p455w0rdslib","placebo","platforms","projectred-core","projectred-expansion","projectred-exploration","projectred-fabrication","projectred-illumination","projectred-integration","projectred-relocation","projectred-transmission","projectred-transportation","quark","quickleafdecay","railcraft","randompatches","rangedpumps","reborncore","rebornstorage","redstonearsenal","redstoneflux","refinedstorage","refinedstorageaddons","rftools","rftoolscontrol","rftoolspower","rustic","shadowmc","shetiphiancore","simplevoidworld","simplyjetpacks","snad","sonarcore","soulshardsrespawn","stevescarts","storagedrawers","storagedrawersextra","tcinventoryscan","tconstruct","teslacorelib","teslacorelib_registries","thaumcraft","theoneprobe","thermalcultivation","thermaldynamics","thermalexpansion","thermalfoundation","thermalinnovation","thutcore","thutcore_compat","thuttech","tinkertoolleveling","topaddons","torchmaster","translocators","twilightforest","unidict","universalmodifiers","valkyrielib","wanionlib","waystones","wct","woot","xnet","xreliquary","xtones","yabba","zerocore"],
    }
};

const vanillaModdedServerResp = {
    "ip": "24.6.170.127",
    "port": 25566,
    "motd": {
        "raw": ["A Minecraft Server"],
        "clean": ["A Minecraft Server"],
        "html": ["A Minecraft Server!!"]
    },
    "players": {
        "online": 0,
        "max": 20
    },
    "version": "1.14.3",
    "online": true,
    "protocol": 490,
    "software": "Paper"
};

const mockOfflineResp = {
    "ip": "24.6.170.127",
    "port": "25567",
    "online":false
};