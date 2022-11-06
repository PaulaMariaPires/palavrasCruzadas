inp_rom.value = "";
inp_dualCore.value = "";
inp_registradores.value = "";
inp_quadCore.value = "";
inp_ram.value = "";
inp_threads.value = "";
inp_cpu.value = "";
inp_adressBus.value = "";
inp_cache.value = "";
inp_i7.value = "";
inp_ula.value = "";
inp_eprom.value = "";
inp_i5.value = "";
inp_dataBus.value = "";
inp_dma.value = "";
inp_flash.value = "";
inp_cs.value = "";

function verificar_q1() {
    var rom = inp_rom.value;
    if (rom.toUpperCase() == "ROM") {
        romR.innerHTML = `R`;
        romO.innerHTML = `O`;
        romM.innerHTML = `M`;
        inp_rom.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q2() {
    var dualCore = inp_dualCore.value;
    if (dualCore.toUpperCase() == "DUAL CORE") {
        dual_coreD.innerHTML = `D`;
        dual_coreU.innerHTML = `U`;
        dual_coreA.innerHTML = `A`;
        dual_coreL.innerHTML = `L`;
        dual_coreC.innerHTML = `C`;
        dual_coreO.innerHTML = `O`;
        dual_coreR.innerHTML = `R`;
        inp_dualCore.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q3() {
    var registradores = inp_registradores.value;
    if (registradores.toUpperCase() == "REGISTRADORES") {
        registradoresR1.innerHTML = `R`;
        registradoresE1.innerHTML = `E`;
        registradoresG.innerHTML = `G`;
        registradoresI.innerHTML = `I`;
        registradoresS1.innerHTML = `S`;
        registradoresT.innerHTML = `T`;
        registradoresA.innerHTML = `A`;
        registradoresD.innerHTML = `D`;
        registradoresO.innerHTML = `O`;
        registradoresR2.innerHTML = `R`;
        registradoresE2.innerHTML = `E`;
        registradoresS2.innerHTML = `S`;
        inp_registradores.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q4() {
    var quadCore = inp_quadCore.value;
    if (quadCore.toUpperCase() == "QUAD CORE") {
        quad_coreQ.innerHTML = `Q`;
        dual_coreU.innerHTML = `U`;
        quad_coreA.innerHTML = `A`;
        quad_coreD.innerHTML = `D`;
        quad_coreC.innerHTML = `C`;
        quad_coreO.innerHTML = `O`;
        quad_coreR.innerHTML = `R`;
        quad_coreE.innerHTML = `E`;
        inp_quadCore.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q5() {
    var ram = inp_ram.value;
    if (ram.toUpperCase() == "RAM") {
        registradoresR1.innerHTML = `R`;
        ramA.innerHTML = `A`;
        romM.innerHTML = `M`;
        inp_ram.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q6() {
    var threads = inp_threads.value;
    if (threads.toUpperCase() == "THREADS") {
        threadsT.innerHTML = `T`;
        threadsH.innerHTML = `H`;
        threadsR.innerHTML = `R`;
        threadsE.innerHTML = `E`;
        threadsA.innerHTML = `A`;
        threadsS.innerHTML = `S`;
        inp_threads.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q7() {
    var cpu = inp_cpu.value;
    if (cpu.toUpperCase() == "CPU") {
        cpuC.innerHTML = `C`;
        cpuP.innerHTML = `P`;
        cpuU.innerHTML = `U`;
        inp_cpu.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q8() {
    var adressBus = inp_adressBus.value;
    if (adressBus.toUpperCase() == "ADRESS BUS") {
        adress_busA.innerHTML = `A`;
        adress_busD.innerHTML = `D`;
        adress_busR.innerHTML = `R`;
        adress_busE.innerHTML = `E`;
        adress_busS1.innerHTML = `S`;
        adress_busB.innerHTML = `B`;
        adress_busU.innerHTML = `U`;
        adress_busS2.innerHTML = `S`;
        inp_adressBus.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q9() {
    var cache = inp_cache.value;
    if (cache.toUpperCase() == "CACHE") {
        cpuC.innerHTML = `C`;
        adress_busA.innerHTML = `A`;
        cacheC.innerHTML = `C`;
        cacheH.innerHTML = `H`;
        cacheE.innerHTML = `E`;
        inp_cache.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q10() {
    var i7 = inp_i7.value;
    if (i7.toUpperCase() == "I7") {
        registradoresI.innerHTML = `I`;
        i77.innerHTML = `7`;
        inp_i7.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q11() {
    var ula = inp_ula.value;
    if (ula.toUpperCase() == "ULA") {
        ulaU.innerHTML = `U`;
        ulaL.innerHTML = `L`;
        inp_ula.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q12() {
    var eprom = inp_eprom.value;
    if (eprom.toUpperCase() == "EPROM") {
        epromP.innerHTML = `P`;
        epromR.innerHTML = `R`;
        epromO.innerHTML = `O`;
        epromM.innerHTML = `M`;
        inp_eprom.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q13() {
    var i5 = inp_i5.value;
    if (i5.toUpperCase() == "I5") {
        i55.innerHTML = `5`;
        inp_i5.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q15() {
    var dataBus = inp_dataBus.value;
    if (dataBus.toUpperCase() == "DATA BUS") {
        data_busD.innerHTML = `D`;
        data_busA1.innerHTML = `A`;
        data_busT.innerHTML = `T`;
        data_busA2.innerHTML = `A`;
        adress_busB.innerHTML = `B`
        data_busU.innerHTML = `U`;
        data_busS.innerHTML = `S`;
        inp_dataBus.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q16() {
    var dma = inp_dma.value;
    if (dma.toUpperCase() == "DMA") {
        dmaD.innerHTML = `D`;
        epromM.innerHTML = `M`;
        dmaA.innerHTML = `A`;
        inp_dma.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q17() {
    var flash = inp_flash.value;
    if (flash.toUpperCase() == "FLASH") {
        flashF.innerHTML = `F`;
        flashL.innerHTML = `L`;
        flashA.innerHTML = `A`;
        adress_busS2.innerHTML = `S`;
        flashH.innerHTML = `H`;
        inp_flash.style.border = `solid 2px lightgreen`;
    }
}

function verificar_q18() {
    var cs = inp_cs.value;
    if (cs.toUpperCase() == "CS") {
        csC.innerHTML = `C`;
        registradoresS2.innerHTML = `S`;
        inp_cs.style.border = `solid 2px lightgreen`;
    }
}