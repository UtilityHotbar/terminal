// Startup dialogue

const StartupOutputFromLocalEmu = `
 _   _                 ___   ____  
| \\ | |  ___  __   __ / _ \\ / ___| 
|  \\| | / _ \\ \\ \\ / /| | | |\\___ \\ 
| |\\  || (_) | \\ V / | |_| | ___) |
|_| \\_| \\___/   \\_/   \\___/ |____/


HAVLAND TECHNICA 2010

(...)

<span class="hint">=== STARTUP ERROR LOG ===</hint>
[3.2s] System Integrity Check failed (Error code 0x39 NO_RESPONSE) - Some syscalls and system functions not available. System will launch in manual debug mode.
<span class="hint">=== END STARTUP ERROR LOG ===</hint>

Starting in manual debug mode (Use command "help" for help)...
`.split('\n');

// Win screen dialogue

var letter = `
You win! Thanks for playing!

Shutting down...
`

// Levels 1-5

p1 = {'name': 'Addition / Addition', 'start': {'IP': 0, '0': 2, '1': 2, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 
0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0}, 'end': {'IP': 'ANY', '0': 'ANY', '1': 'ANY', '2': 4, '3': 'ANY', '4': 'ANY', '5': 'ANY', '6': 'ANY', '7': 'ANY', '8': 'ANY', '9': 'ANY', '10': 'ANY', '11': 'ANY', '12': 'ANY', '13': 'ANY', '14': 'ANY', '15': 'ANY', '16': 'ANY', '17': 'ANY', '18': 'ANY', '19': 'ANY', '20': 'ANY', '21': 'ANY', '22': 'ANY', '23': 'ANY', '24': 'ANY', '25': 'ANY', '26': 'ANY', '27': 'ANY', '28': 'ANY', '29': 'ANY', '30': 'ANY', '31': 'ANY', '32': 'ANY', '33': 'ANY', '34': 'ANY', '35': 'ANY', '36': 'ANY', '37': 'ANY', '38': 'ANY', '39': 'ANY', '40': 'ANY', '41': 'ANY', '42': 'ANY', '43': 'ANY', '44': 'ANY', 
'45': 'ANY', '46': 'ANY', '47': 'ANY', '48': 'ANY', '49': 'ANY', '50': 'ANY', '51': 'ANY', '52': 'ANY', '53': 'ANY', '54': 'ANY', '55': 'ANY', '56': 'ANY', '57': 'ANY', '58': 'ANY', '59': 'ANY', '60': 'ANY', '61': 'ANY', '62': 'ANY', '63': 'ANY', '64': 'ANY', '65': 'ANY', '66': 'ANY', '67': 'ANY', '68': 'ANY', '69': 'ANY', '70': 'ANY', '71': 'ANY', '72': 'ANY', '73': 'ANY', '74': 'ANY', '75': 'ANY', '76': 'ANY', '77': 'ANY', '78': 'ANY', '79': 'ANY', '80': 'ANY', '81': 'ANY', '82': 'ANY', '83': 'ANY', '84': 'ANY', '85': 'ANY', '86': 'ANY', '87': 'ANY', '88': 'ANY', '89': 'ANY', '90': 'ANY', '91': 'ANY', '92': 'ANY', '93': 'ANY', '94': 'ANY', '95': 'ANY', '96': 'ANY', '97': 'ANY', '98': 
'ANY', '99': 'ANY'}, 'limit': 1, 'code': ['ADD $0 $1 $0']}
p2 = {'name': 'Swizzle Function / Swizzlefunktion', 'start': {'IP': 0, '0': 5, '1': 6, '2': 7, '3': 8, '4': 3, '5': 3, '6': 0, '7': 1, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 
0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, 
'73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0}, 'end': {'IP': 'ANY', '0': 'ANY', '1': 'ANY', '2': 'ANY', '3': 'ANY', '4': 'ANY', '5': 'ANY', '6': 'ANY', '7': 'ANY', '8': 8, '9': 8, '10': 5, '11': 6, '12': 'ANY', '13': 'ANY', '14': 'ANY', '15': 'ANY', '16': 'ANY', '17': 'ANY', '18': 'ANY', '19': 'ANY', '20': 'ANY', '21': 'ANY', '22': 'ANY', '23': 'ANY', '24': 'ANY', '25': 'ANY', '26': 'ANY', '27': 'ANY', '28': 'ANY', '29': 'ANY', '30': 'ANY', '31': 'ANY', '32': 'ANY', '33': 'ANY', '34': 'ANY', '35': 'ANY', '36': 'ANY', '37': 'ANY', '38': 'ANY', '39': 'ANY', '40': 'ANY', '41': 'ANY', '42': 'ANY', '43': 'ANY', '44': 'ANY', '45': 'ANY', '46': 'ANY', '47': 'ANY', '48': 'ANY', '49': 'ANY', '50': 'ANY', '51': 'ANY', '52': 'ANY', '53': 'ANY', '54': 'ANY', '55': 'ANY', '56': 
'ANY', '57': 'ANY', '58': 'ANY', '59': 'ANY', '60': 'ANY', '61': 'ANY', '62': 'ANY', '63': 'ANY', '64': 'ANY', '65': 'ANY', '66': 'ANY', '67': 'ANY', '68': 'ANY', '69': 'ANY', '70': 'ANY', '71': 'ANY', '72': 'ANY', '73': 'ANY', '74': 'ANY', '75': 'ANY', '76': 'ANY', '77': 'ANY', '78': 'ANY', '79': 'ANY', '80': 'ANY', '81': 'ANY', '82': 'ANY', '83': 'ANY', '84': 'ANY', '85': 'ANY', '86': 'ANY', '87': 'ANY', '88': 'ANY', '89': 'ANY', '90': 'ANY', '91': 'ANY', '92': 'ANY', '93': 'ANY', '94': 'ANY', '95': 'ANY', '96': 'ANY', '97': 'ANY', '98': 'ANY', '99': 'ANY'}, 'limit': 5, 'code': ['MOV 4 $98', 'MRK LOOP', 'MRD $98 $97', 'MRD $97 $99', 'ADD $98 4 $96', 'MWT $99 $96', 'ADD $98 1 $98', 'TLT $98 7 $95', 'JIF $95 :LOOP']}
p3 = {'name': 'Non-destructive Multiplication / Sikkermultiplikation', 'start': {'IP': 0, '0': 12, '1': 26, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 
0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0}, 'end': {'IP': 'ANY', '0': 12, '1': 26, '2': 312, '3': 'ANY', '4': 'ANY', '5': 'ANY', '6': 'ANY', '7': 'ANY', '8': 'ANY', '9': 'ANY', '10': 'ANY', '11': 'ANY', '12': 'ANY', '13': 'ANY', '14': 'ANY', '15': 'ANY', '16': 'ANY', '17': 'ANY', '18': 'ANY', '19': 'ANY', '20': 'ANY', '21': 'ANY', '22': 'ANY', '23': 'ANY', '24': 'ANY', '25': 'ANY', '26': 'ANY', '27': 'ANY', '28': 'ANY', '29': 'ANY', '30': 'ANY', '31': 'ANY', '32': 'ANY', '33': 'ANY', '34': 'ANY', '35': 'ANY', '36': 'ANY', '37': 'ANY', '38': 'ANY', '39': 'ANY', '40': 'ANY', '41': 'ANY', '42': 'ANY', '43': 'ANY', '44': 'ANY', '45': 'ANY', '46': 'ANY', '47': 'ANY', '48': 'ANY', '49': 'ANY', '50': 'ANY', '51': 'ANY', '52': 'ANY', '53': 'ANY', '54': 
'ANY', '55': 'ANY', '56': 'ANY', '57': 'ANY', '58': 'ANY', '59': 'ANY', '60': 'ANY', '61': 'ANY', '62': 'ANY', '63': 'ANY', '64': 'ANY', '65': 'ANY', '66': 'ANY', '67': 'ANY', '68': 'ANY', '69': 'ANY', '70': 'ANY', '71': 'ANY', '72': 'ANY', '73': 'ANY', '74': 'ANY', '75': 'ANY', '76': 'ANY', '77': 'ANY', '78': 'ANY', '79': 'ANY', '80': 'ANY', '81': 'ANY', '82': 'ANY', '83': 'ANY', '84': 'ANY', '85': 'ANY', '86': 'ANY', '87': 'ANY', '88': 'ANY', '89': 'ANY', '90': 'ANY', '91': 'ANY', '92': 'ANY', '93': 'ANY', '94': 'ANY', '95': 'ANY', '96': 'ANY', '97': 'ANY', '98': 'ANY', '99': 'ANY'}, 'limit': 5, 'code': ['MOV 0 $97', 'MOV 1 $95', 'MRD $97 $97', 'MRD $95 $96', 'MRK LOOP', 'ADD $97 $98 $98', 'SUB $96 $95 $96', 'TGT $96 0 $96', 'JIF $96 :LOOP', 'MOV $98 $3']}

p4 = {'name': 'Clamping function / Klemmeringfunktion', 'start': {'IP': 0, '0': -128, '1': -185, '2': 186, '3': 168, '4': 119, '5': -128, '6': -155, '7': -157, '8': 
-129, '9': 50, '10': 36, '11': -112, '12': 144, '13': 113, '14': -37, '15': -81, '16': -163, '17': -38, '18': 3, '19': 10, '20': -136, '21': 111, '22': 38, '23': -39, '24': -70, '25': 19, '26': 94, '27': 32, '28': 13, '29': -140, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 
0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0}, 'end': {'IP': 'ANY', '0': -100, '1': -100, '2': 100, '3': 100, '4': 100, '5': -100, '6': -100, '7': -100, '8': -100, '9': 50, '10': 36, '11': -100, '12': 100, '13': 100, '14': -37, '15': -81, '16': -100, '17': -38, '18': 3, '19': 10, '20': -100, '21': 100, '22': 38, '23': -39, '24': -70, '25': 19, '26': 94, '27': 32, '28': 13, '29': -100, '30': 'ANY', '31': 'ANY', '32': 'ANY', '33': 'ANY', '34': 'ANY', '35': 'ANY', '36': 'ANY', '37': 'ANY', '38': 'ANY', '39': 'ANY', '40': 'ANY', '41': 'ANY', '42': 'ANY', '43': 'ANY', '44': 
'ANY', '45': 'ANY', '46': 'ANY', '47': 'ANY', '48': 'ANY', '49': 'ANY', '50': 'ANY', '51': 'ANY', '52': 'ANY', '53': 'ANY', '54': 'ANY', '55': 'ANY', '56': 'ANY', '57': 'ANY', '58': 'ANY', '59': 'ANY', '60': 'ANY', '61': 'ANY', '62': 'ANY', '63': 'ANY', '64': 'ANY', '65': 'ANY', '66': 'ANY', '67': 'ANY', '68': 'ANY', '69': 'ANY', '70': 'ANY', '71': 'ANY', '72': 'ANY', '73': 'ANY', '74': 'ANY', '75': 'ANY', '76': 'ANY', '77': 'ANY', '78': 'ANY', '79': 'ANY', '80': 'ANY', '81': 'ANY', '82': 'ANY', '83': 'ANY', '84': 'ANY', '85': 'ANY', '86': 'ANY', '87': 'ANY', '88': 'ANY', '89': 'ANY', '90': 'ANY', '91': 'ANY', '92': 'ANY', '93': 'ANY', '94': 'ANY', '95': 'ANY', '96': 'ANY', '97': 'ANY', '98': 'ANY', '99': 'ANY'}, 'limit': 10, 'code': ['MOV 0 $90', 'MRK LOOP', 'MRD $90 $91', 'TGT $91 100 $92', 'JIF $92 :WRITE', 'TLT $91 -100 $92', 'JIF $92 :WRITE', 'JMP :WRITE', 'MRK WRITEBIG', 'MOV 100 $91', 'JMP :WRITE', 'MRK WRITESMALL', 'MOV -100 $91', 'JMP :WRITE', 'MRK WRITE', 'MWT $91 $90', 'ADD $90 1 $90', 'TLT $90 30 $93', 'JIF $90 :LOOP']}

p5 = {'name': 'Bubble Sort / Boblesortering', 'start': {'IP': 0, '0': 100, '1': 39, '2': 48, '3': 12, '4': 99, '5': 98, '6': 71, '7': 62, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 
0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, 
'88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0}, 'end': {'IP': 'ANY', '0': 12, 
'1': 39, '2': 48, '3': 62, '4': 71, '5': 98, '6': 99, '7': 100, '8': 'ANY', '9': 'ANY', '10': 'ANY', '11': 'ANY', '12': 'ANY', '13': 'ANY', '14': 'ANY', '15': 'ANY', '16': 'ANY', '17': 'ANY', '18': 'ANY', '19': 'ANY', '20': 'ANY', '21': 'ANY', '22': 'ANY', '23': 'ANY', '24': 'ANY', '25': 'ANY', '26': 'ANY', '27': 'ANY', '28': 'ANY', '29': 'ANY', '30': 'ANY', '31': 'ANY', '32': 'ANY', '33': 'ANY', '34': 'ANY', '35': 'ANY', '36': 'ANY', '37': 'ANY', '38': 'ANY', '39': 'ANY', '40': 'ANY', '41': 'ANY', '42': 'ANY', '43': 'ANY', '44': 'ANY', '45': 'ANY', 
'46': 'ANY', '47': 'ANY', '48': 'ANY', '49': 'ANY', '50': 'ANY', '51': 'ANY', '52': 'ANY', '53': 'ANY', '54': 'ANY', '55': 'ANY', '56': 'ANY', '57': 'ANY', '58': 'ANY', '59': 'ANY', '60': 'ANY', '61': 'ANY', '62': 'ANY', '63': 'ANY', '64': 'ANY', '65': 'ANY', '66': 'ANY', '67': 'ANY', '68': 'ANY', '69': 'ANY', '70': 'ANY', '71': 'ANY', '72': 'ANY', '73': 'ANY', '74': 'ANY', '75': 'ANY', '76': 'ANY', '77': 'ANY', '78': 'ANY', '79': 'ANY', '80': 'ANY', '81': 'ANY', '82': 'ANY', '83': 'ANY', '84': 'ANY', '85': 'ANY', '86': 'ANY', '87': 'ANY', '88': 'ANY', '89': 'ANY', '90': 'ANY', '91': 'ANY', '92': 'ANY', '93': 'ANY', '94': 'ANY', '95': 'ANY', '96': 'ANY', '97': 'ANY', '98': 'ANY', '99': 
'ANY'}, 'limit': 5, 'code': ['MOV 7 $99', 'MRK BIGLOOP', 'MOV 0 $90', 'MRK LOOP', 'ADD $90 1 $91', 'MRD $90 $92', 'MRD $91 $93', 'TLT $93 $92 $94', 'JIF $94 :NOSWP', 'MWT $93 $90', 'MWT $92 $91', 'JMP :END', 'MRK NOSWP', 'MWT $92 $90', 'MWT $93 $91', 'MRK END', 'ADD $90 1 $90', 'TLT $90 8 $94', 'JIF $94 :LOOP', 'SUB $99 1 $99', 'TGT $99 0 $98', 'JIF $98 :BIGLOOP']}

// Initialisation of VM variables

QUESTIONS = [p1, p2, p3, p4, p5];
CURR_QUESTION = 0;
MAX_QUESTIONS = 5;
CURR_CODE = [];
ORIG_CODE = QUESTIONS[CURR_QUESTION]['code'];
CURR_MEM = [];
ORIG_MEM = QUESTIONS[CURR_QUESTION]['start'];
CURR_MARKS = {};
FAILED = false;
ERRORED = false;

const NUMERICREGEX = new RegExp('[0-9]+');

QUEUE = [];
PRINTING = false;
const LINE_LEN = 42;

function print_term(ts, d=200, l='novos-terminal-output') {  // push string or list of strings to print queue
    if (typeof ts === 'string'){
        QUEUE.push(ts);
    }else if (typeof ts === 'object'){
        QUEUE.push.apply(QUEUE, ts);
    }
    if (QUEUE.length > 0 && !PRINTING){
        PRINTING = true;
        window.setTimeout(()=>{out(d=d, l=l)}, d);
    }
    console.log(QUEUE);
}

function out(delay, elem){  // Grabs top line in queue and pushes it to webpage, then calls itself again after a timeout if there are lines remaining in queue
    t = QUEUE[0];
    QUEUE = QUEUE.slice(1);
    tl = t + '<br>';
    i = document.getElementById(elem)
    i.innerHTML += tl;
    i.scrollTop = i.scrollHeight;
    if (QUEUE.length > 0){
        window.setTimeout(()=>{out(delay=delay, elem=elem)}, delay);
    }else{
        PRINTING = false;
    }
}

function clim(num, min, max){  // Check if number passed in is within range (min, max)
    return (min <= parseInt(num) && parseInt(num) <= max)
}

function get_command(l='novos-terminal-input') {  // get current command and clear input bar
    var c = document.getElementById(l)
    var res = c.value
    if (res != ''){
        print_term('> '+res);
        c.value="";
    }
    var splitres = res.split(' ');
    var comm = splitres[0].toLowerCase();
    if (comm == 'help'){
        print_term('Limited documentation available in web emulation version. Consult the system manual for help.');
    }else if (comm == 'mem'){
        blnk('novos-system-memory');
    }else if (comm == 'tgt'){
        blnk('novos-target-memory');
    }else if (comm == 'print'){
        
        if (splitres.length == 1){
            print_term(prettify(CURR_CODE));
        }else{
            console.log(CURR_CODE[parseInt(splitres[1])]);
            if (clim(splitres[1], 0, CURR_CODE.length-1)){
                print_term(highlight(CURR_CODE[parseInt(splitres[1])]));
            }else{
                print_term('Invalid line number '+splitres[1]);
            }
        }
    }else if (comm == 'orig'){
        
        if (splitres.length == 1){
            print_term(prettify(ORIG_CODE));
        }else{
            console.log(ORIG_CODE[parseInt(splitres[1])]);
            if (clim(splitres[1], 0, ORIG_CODE.length-1)){
                print_term(highlight(ORIG_CODE[parseInt(splitres[1])]));
            }else{
                print_term('Invalid line number '+splitres[1]);
            }
        }
    }else if (comm == 'res'){
        CURR_MEM = JSON.parse(JSON.stringify(ORIG_MEM));
        ERRORED = false;
        FAILED = false;
        CURR_MEM['IP'] = 0;
        memory_setup_function();
        print_term('<span class="yes">Memory reset.</span>');
    }else if (comm == 'marks'){
        if (Object.keys(CURR_MARKS).length === 0){
            print_term('No marks to show.');
        }else{
            ns = [];
            Object.keys(CURR_MARKS).forEach((key, i)=>{
                ns.push(key+': '+CURR_MARKS[key].toString())
            })
            print_term(ns);
        }

    }else if (comm == 'diff'){
        var dout = [''];
        if (splitres.length == 1){
            dout.push('<span class="data">Max patch file size (in chars): '+QUESTIONS[CURR_QUESTION]['limit'].toString()+'</span>');
            var total = 0;
            var diffing_lines = [];
            for (let i=0;i<CURR_CODE.length;i++){
                var res = levenshtein(ORIG_CODE[i], CURR_CODE[i]);
                total += res;
                if (res > 0){
                    diffing_lines.push(i);
                }
            }
            if (total > QUESTIONS[CURR_QUESTION]['limit']){
                var cs = 'no';
            }else if (total == QUESTIONS[CURR_QUESTION]['limit']){
                var cs = 'hint';
            }else{
                var cs = 'yes';
            }
            dout.push('<span class="'+cs+'">Current patch file size: '+total.toString()+'</span>');
            CURR_CODE.forEach((line, i) => {
                if (diffing_lines.includes(i)){
                    dout.push('<span class="no"><s>'+ORIG_CODE[i]+'</s></span>');
                    dout.push('<span class="yes">'+line+'</span>');
                }else{
                    dout.push(line);
                }
            })
        }else{
            if (clim(splitres[1], 0, CURR_CODE.length-1)){
                var li = parseInt(splitres[1]);
                dist = levenshtein(ORIG_CODE[li], CURR_CODE[li]);
                if (dist > 0){
                    dout.push('<span class="no"><s>'+ORIG_CODE[li]+'</s></span>');
                    dout.push('<span class="yes">'+CURR_CODE[li]+'</span>');
                }else{
                    dout.push(CURR_CODE[li]);
                }
            }
        }
        dout.push('');
        print_term(dout);
    }else if (comm == 'patch'){
        if (splitres.length >= 3){
            console.log(splitres[1], CURR_CODE.length-1)
            if (clim(splitres[1], 0, CURR_CODE.length-1)){
                var newline = splitres.slice(2).join(' ').toUpperCase();
                CURR_CODE[parseInt(splitres[1])] = newline;
                diff_len = levenshtein(ORIG_CODE[parseInt(splitres[1])], newline);
                print_term('<span class="yes">Patched '+diff_len.toString()+' chars.</span>');
            }else{
                print_term('Invalid line number specified.');
            }
        }else{
            print_term('Invalid number of arguments.');
        }
    }else if (comm == 'name'){
        print_term('Current syscall: '+QUESTIONS[CURR_QUESTION]['name'])
    }else if (comm == 'run'){
        // Establishing run limit
        var limit = -1;
        if (splitres.length > 1){
            if (parseInt(splitres[1])){
                var limit = parseInt(splitres[1])
            }
        }
        // Checking for immediate exit failure states
        if (FAILED){
            print_term('<span class="no">Syscall has already finished executing and tests were not passed. Please restart.</span>')
            return
        }else if (ERRORED){
            print_term('<span class="no">Error encountered during runtime. Syscall cannot continue running. Please restart.</span>')
            return
        }else{
            tot_diff = 0;
            CURR_CODE.forEach((line, i)=>{
                tot_diff += levenshtein(ORIG_CODE[i], line);
            })
            if (tot_diff > QUESTIONS[CURR_QUESTION]['limit']){
                print_term('<span class="no">Maximum patch file size exceeded. Cannot execute syscall.</span>')
                return
            }
        }
        // Update marks
        CURR_MARKS = get_marks(CURR_CODE);
        var execution_complete = false;
        try {
            // Core VM loop
            while (!execution_complete){
                console.log('running');
                run_line(CURR_CODE[CURR_MEM['IP']]);
                CURR_MEM['IP'] += 1;
                limit -= 1;
                update_element_by_id('IP', CURR_MEM['IP']);
                if (CURR_MEM['IP'] >= CURR_CODE.length || limit === 0){
                    execution_complete = true;
                }
            }
            // At the end of execution verify if test cse has been solved
            if (CURR_MEM['IP'] >= CURR_CODE.length){
                print_term('<span class="hint">---EXECUTION COMPLETE---</span>');
                if (!check_answers()){
                    blnk('novos-system-memory', bg='lightcoral');
                    blnk('novos-target-memory', bg='lightcoral');
                    print_term('<span class="no">System memory and target memory do not match. Please reset and retry.</span>')
                    FAILED = true;
                }else{
                    blnk('novos-system-memory', bg='lightgreen');
                    blnk('novos-target-memory', bg='lightgreen');
                    print_term('<span class="yes">Syscall implementation verified. Loading next syscall...</span>');
                    CURR_QUESTION += 1;
                    if (CURR_QUESTION >= MAX_QUESTIONS){
                        print_term('<span class="yes">---DEBUGGING COMPLETE---</span>')
                        document.getElementById('novos-terminal-input').disabled = true;
                        document.getElementById('novos-terminal-input').style.display = 'none';
                        document.getElementById('novos-terminal-button').style.display = 'none';
                        print_term(letter.split('\n'))
                        return
                    }
                    question_load_function();
                }
            }else{
                print_term('<span class="hint">---EXECUTION PAUSED---</span>')
            }
        }catch (err){
            print_term('<span class="no">---ERROR---</span>')
            print_term('<span class="no">'+err.toString()+"</span>");
            ERRORED = true;
        }
    }

    else{
        print_term('Unknown console command. Please try again.')
    }
}

function check_answers(){  // Check if current and target memory state match
    target = QUESTIONS[CURR_QUESTION]['end']
    for (let i=0; i<100; i++){
        if (target[i] !== 'ANY'){
            if (target[i] != CURR_MEM[i]){
                return false
            }
        }
    }
    return true;
}

function run_line(line){  // Run line in VM
    line = line.split(' ');
    comm = line[0];
    if (comm == 'ADD'){
        a = resolve_symbol(line[1]);
        b = resolve_symbol(line[2]);
        write(line[3], a+b);
    }else if (comm == 'SUB'){
        a = resolve_symbol(line[1]);
        b = resolve_symbol(line[2]);
        write(line[3], a-b);
    }else if (comm == 'TEQ'){
        a = resolve_symbol(line[1]);
        b = resolve_symbol(line[2]);
        if (a==b){
            r = 1
        }else{
            r = -1
        }
        write(line[3], r);
    }else if (comm == 'TGT'){
        a = resolve_symbol(line[1]);
        b = resolve_symbol(line[2]);
        if (a>b){
            r = 1
        }else{
            r = -1
        }
        write(line[3], r);
    }else if (comm == 'TLT'){
        a = resolve_symbol(line[1]);
        b = resolve_symbol(line[2]);
        if (a<b){
            r = 1;
        }else{
            r = -1;
        }
        write(line[3], r);
    }else if (comm == 'MRK'){
    }else if (comm == 'JMP'){
        write('$IP', resolve_symbol(line[1], allows_marks=true));
    }else if (comm == 'JIF'){
        if (resolve_symbol(line[1])>0){
            write('$IP', resolve_symbol(line[2], allows_marks=true));
        }
    }else if (comm == 'MOV'){
        write(line[2], resolve_symbol(line[1]));
    }else if (comm == 'MRD'){
        write(line[2], resolve_symbol('$'+resolve_symbol(line[1]).toString()));
    }else if (comm == 'MWT'){
        write('$'+resolve_symbol(line[2]), resolve_symbol(line[1]));
    }
    else{
        throw '(0x05) INVALID_COMMAND'
    }
}

function is_valid_addr(o){  // Check to see if address is pointed to instruction pointer or memory register (i.e. is it valid)
    return ((clim(o.slice(1), 0, 99)) || o ==='$IP')
}

function resolve_symbol(o, allows_marks=false){  // Resolve symbol (either a mark, register address, or invalid)
    if (typeof o !== 'string'){
        throw '(0x02) NO_ARG_PASSED';
    }else{
        console.log(o);
        if (o.startsWith('$')){
            if (!is_valid_addr(o)){
                throw '(0x03) VAL_RESOLVE_FAILED';
            }
            return CURR_MEM[o.slice(1)]
        }else if (o.startsWith(':')){
            console.log(o.slice(1))
            if (!allows_marks){
                throw '(0x06) INVALID_ARG';
            }else if (!CURR_MARKS.hasOwnProperty(o.slice(1))){
                throw '(0x01) NO_SUCH_MARK';
            }
            return CURR_MARKS[o.slice(1)];
        }else{
            if (NUMERICREGEX.test(o)){
                return parseInt(o)
            }else{
                throw '(0x06) INVALID_ARG'
            }
        }
    }
}

function write(tgt, val){  // Write to memory register
    if (typeof tgt !== 'string'){
        throw '(0x02) NO_ARG_PASSED';
    }
    if (!is_valid_addr(tgt)){
        throw '(0x04) VAL_WRITE_FAILED';
    }else{
        CURR_MEM[tgt.slice(1)] = val;
        update_element_by_id(tgt.slice(1), val);
    }
}

function update_element_by_id(id, val){  // Update then flash element to catch user attention
    document.getElementById(id).innerHTML = val;
    blnk(id);
}

function keypress(e){  // Check for enter key and fetch command from input bar
    if (e.keyCode === 13){
        e.preventDefault();
        get_command();
    }
}

function prettify(code){  // Code formatting, highlight each line and add line numbers
    nc = [];
    for (let i=0; i < code.length; i++){
        let line = i.toString().padStart((code.length-1).toString().length, '0')+'  '+highlight(code[i]);
        nc.push(line);
    }
    return nc;
}

function highlight(line){  // Syntax highlighting
    var line = line.split(' ');
    line[0] = '<span class="hint">'+line[0]+'</span>'
    for (let n=0; n<line.length; n++){
        chunk = line[n];
        if (chunk.charAt(0) === '$'){
            line[n] = '<span class="data">$</span>'+line[n].slice(1);
        }else if (chunk.charAt(0) === ':'){
            line[n] = '<span class="data">'+line[n]+'</span>';
        }
    }
    return line.join(' ')
}


function blnk(id, bg='rgb(138, 138, 138)'){  // blinking (hard coding styles since saving style information fails)
    c = document.getElementById(id);
    // oldstyle = JSON.parse(JSON.stringify(c.style.filter));
    c.style.filter = "brightness(120%) blur(0.5px)";
    // oldback = JSON.parse(JSON.stringify(c.style.backgroundColor));
    c.style.backgroundColor = bg;
    window.setTimeout(()=>{unblnk(id,)}, 300)
}

function unblnk(id, oldback){  // Finish blinking
    console.log('unblinking', id)
    document.getElementById(id).style.filter = '';
    document.getElementById(id).style.backgroundColor="inherit";
}

function get_marks(code){  // scan for loop marks
    marks = {}
    code.forEach((line, i)=>{
        line = line.split(' ');
        if (line[0] == 'MRK'){
            marks[line[1]] = i;
        }
    })
    console.log(marks);
    return marks;
}

function question_load_function(){  // For each level load starting memory state, target memory state, starting code, starting loop marks etc.
    CURR_MEM = JSON.parse(JSON.stringify(QUESTIONS[CURR_QUESTION]['start']));
    ORIG_MEM = JSON.parse(JSON.stringify(QUESTIONS[CURR_QUESTION]['start']));
    CURR_CODE = JSON.parse(JSON.stringify(QUESTIONS[CURR_QUESTION]['code']));
    ORIG_CODE = JSON.parse(JSON.stringify(QUESTIONS[CURR_QUESTION]['code']));
    CURR_MARKS = get_marks(CURR_CODE);
    window.setTimeout(memory_setup_function, 500);
    print_term('Current syscall: '+QUESTIONS[CURR_QUESTION]['name'])
}

function memory_setup_function(){  // Zeros out all the memory registers and sets up target memory state display
    cq = JSON.parse(JSON.stringify(QUESTIONS[CURR_QUESTION]['start']));
    ct = JSON.parse(JSON.stringify(QUESTIONS[CURR_QUESTION]['end']));
    Object.keys(cq).forEach((item, i) => {
        var mi = cq[item]
        if (mi == ''){
            mi = '<span class="noinfo">0</span>';
        }
        document.getElementById(item).innerHTML = mi;
    })
    Object.keys(ct).forEach((item, i) => {
        var mi = ct[item]
        if (mi == 'ANY'){
            mi = '<span class="noinfo">?</span>';
        }
        document.getElementById('t'+item).innerHTML = mi;
    })
}

// Calculate levenshtein distance. Implementation from https://stackoverflow.com/questions/18516942/fastest-general-purpose-levenshtein-javascript-implementation

function levenshtein(s, t) {
    if (s === t) {
        return 0;
    }
    var n = s.length, m = t.length;
    if (n === 0 || m === 0) {
        return n + m;
    }
    var x = 0, y, a, b, c, d, g, h, k;
    var p = new Array(n);
    for (y = 0; y < n;) {
        p[y] = ++y;
    }

    for (; (x + 3) < m; x += 4) {
        var e1 = t.charCodeAt(x);
        var e2 = t.charCodeAt(x + 1);
        var e3 = t.charCodeAt(x + 2);
        var e4 = t.charCodeAt(x + 3);
        c = x;
        b = x + 1;
        d = x + 2;
        g = x + 3;
        h = x + 4;
        for (y = 0; y < n; y++) {
            k = s.charCodeAt(y);
            a = p[y];
            if (a < c || b < c) {
                c = (a > b ? b + 1 : a + 1);
            }
            else {
                if (e1 !== k) {
                    c++;
                }
            }

            if (c < b || d < b) {
                b = (c > d ? d + 1 : c + 1);
            }
            else {
                if (e2 !== k) {
                    b++;
                }
            }

            if (b < d || g < d) {
                d = (b > g ? g + 1 : b + 1);
            }
            else {
                if (e3 !== k) {
                    d++;
                }
            }

            if (d < g || h < g) {
                g = (d > h ? h + 1 : d + 1);
            }
            else {
                if (e4 !== k) {
                    g++;
                }
            }
            p[y] = h = g;
            g = d;
            d = b;
            b = c;
            c = a;
        }
    }

    for (; x < m;) {
        var e = t.charCodeAt(x);
        c = x;
        d = ++x;
        for (y = 0; y < n; y++) {
            a = p[y];
            if (a < c || d < c) {
                d = (a > d ? d + 1 : a + 1);
            }
            else {
                if (e !== s.charCodeAt(y)) {
                    d = c + 1;
                }
                else {
                    d = c;
                }
            }
            p[y] = d;
            c = a;
        }
        h = d;
    }

    return h;
}

function start_game(){  // Print initial "startup dialog"
    print_term(StartupOutputFromLocalEmu, d=250);
    question_load_function();
}

start_game();