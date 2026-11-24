const CP={key:'cp01',title:'COMPUTER BASICS',tag:'Understand the machine before securing it.',next:'OPERATING SYSTEMS — CHECKPOINT 02',pass:.8,secs:1800,quote:'You now understand the fundamental components of a computer and how they relate to cybersecurity.'};
// ---- CONTENT (add a new checkpoint by swapping these arrays) ----
const M=[
{t:'Computer Architecture',b:['A computer accepts input, processes it by following stored instructions, stores data, and produces output. Everything from a phone to a server follows this pattern.','The CPU executes instructions. RAM is fast, temporary workspace. ROM or firmware holds the startup code. The motherboard connects every part. Hardware is the physical machine; software is the instructions that run on it. Input devices (keyboard, mouse, microphone) send data in; output devices (monitor, printer, speakers) send results out.'],d:['Input','CPU','RAM','Storage','Output'],k:'CPU=Chip that executes instructions;Firmware=Software stored on hardware chips that starts the device;Motherboard=Main board connecting all components',w:'Attacks live at every layer: malicious firmware sits below the operating system, memory attacks target RAM, and malware is software. If you cannot name the parts, you cannot tell where an attack lives or where to investigate.',x:'A USB cable that secretly types commands as a keyboard is a hardware-level input threat. No antivirus scan of files would reveal it, because nothing was stored.'},
{t:'Binary Fundamentals',b:['A bit is a single 0 or 1. A byte is 8 bits and can represent 256 different values (0–255). Binary is base 2, decimal is base 10, and hexadecimal is base 16 using 0–9 and A–F, where each hex digit equals exactly 4 bits.','Example: binary 1011 = 8+0+2+1 = 11 decimal = 0xB. Text, images and programs are all just bytes; context decides their meaning. The letter A is 65 decimal, 0x41 hex, 01000001 binary.'],d:['Bits','Byte (8 bits)','Hex digits','Meaning'],k:'Bit=Smallest unit of data, 0 or 1;Byte=Group of 8 bits;Hexadecimal=Base 16 number system used to write bytes compactly',w:'Analysts read hex dumps, memory addresses, hashes and IP data every day. Recognising the bytes 4D 5A (the letters MZ) at the start of a file shows it is a Windows executable even if someone renamed it to look harmless.',x:'A file called holiday.jpg whose first bytes are 4D 5A is not a photo. Its content, not its name, reveals the truth, which is a core digital-forensics idea.'},
{t:'CPU Fundamentals',b:['The ALU (Arithmetic Logic Unit) performs maths and logical comparisons. The Control Unit directs the flow of instructions and data. Registers are tiny, ultra-fast storage cells inside the CPU, such as the program counter, which holds the address of the next instruction.','Every instruction goes through the Fetch–Decode–Execute cycle: fetch it from memory, decode what it means, execute it, then repeat billions of times per second.'],d:['Fetch','Decode','Execute','Repeat'],k:'ALU=Does arithmetic and logic;Register=Tiny fast storage inside the CPU;Program counter=Register holding the next instruction address',w:'Many exploits work by hijacking the instruction pointer so the CPU fetches attacker-supplied code instead. Malware analysts use debuggers to step through instructions and watch registers to understand what a sample does.',x:'A stack buffer overflow that overwrites a saved return address makes the CPU jump to attacker code at the next fetch step.'},
{t:'Memory Systems',b:['RAM is fast but volatile: its contents disappear when power is lost. Storage (SSD or HDD) is slower but persistent. Cache is very small, very fast memory in or near the CPU that keeps frequently used data close.','Virtual memory lets the operating system use disk space (a page file or swap) as overflow for RAM and gives every process its own private address space. Speed order, fastest first: registers, cache, RAM, SSD/HDD.'],d:['Registers','Cache','RAM','SSD/HDD'],k:'Volatile=Loses data when power is off;Cache=Small fast memory near the CPU;Page file=Disk space used as overflow RAM',w:'Passwords, encryption keys and decrypted documents sit in RAM while in use, so attackers and forensic examiners both capture memory. Swap files can leave secrets on disk long after a program closes.',x:'Investigators dump RAM from a compromised server to find a running malware process that was never written to disk, then analyse it offline.'},
{t:'Files and File Systems',b:['A file system (NTFS, ext4, APFS, FAT32) organises where data sits on storage. Folders group files; metadata records names, sizes and timestamps. Extensions such as .pdf or .exe suggest a type, but they can be faked: the real type lives in the content.','Permissions control who may read, write or execute (Linux shows r, w, x). When a file is deleted the system normally only marks its space as free, so data often remains until overwritten. That is why recovery tools work and why secure wiping exists.'],d:['File name','Metadata','Permissions','Data blocks'],k:'File system=Method of organising data on storage;Permission=Rule defining who can read, write or execute;Data recovery=Restoring data from space marked free',w:'Malware hides behind double extensions such as invoice.pdf.exe. Forensics recovers deleted evidence. Over-permissive files let any user steal or change data, so least privilege matters.',x:'An employee deletes a customer list before leaving. Because the blocks were not overwritten, a forensic tool can still recover it.'},
{t:'BIOS, UEFI and Boot Process',b:['When power is applied, firmware runs POST (Power-On Self-Test) to check the CPU, RAM and devices. It then finds a boot device and starts the bootloader, which loads the operating system kernel. Services start and finally the login screen appears.','BIOS is the legacy firmware (MBR disks). UEFI is the modern replacement (GPT disks, faster, graphical). UEFI supports Secure Boot, which checks digital signatures so only trusted bootloaders run.'],d:['Power on','POST','Firmware','Bootloader','OS kernel','Login'],k:'POST=Hardware self-test at startup;Bootloader=Program that loads the OS;Secure Boot=UEFI feature that verifies boot software signatures',w:'Bootkits and rootkits infect the early boot stage so they start before antivirus and the OS defences. Secure Boot and measured boot defend this stage, and forensic work often checks boot integrity first.',x:'Malware that replaces the bootloader loads before Windows does, so ordinary security software never gets a chance to see it start.'},
{t:'How Programs Execute',b:['Source code is human-readable text. A compiler translates all of it into machine code ahead of time (C, Rust). An interpreter reads and runs it line by line (Python, JavaScript). A running program is a process with its own memory; threads are separate paths of execution inside a process.','A process memory layout has code, the stack (function calls and local variables) and the heap (dynamic allocation). Lifecycle: write, compile or interpret, load, run, terminate.'],d:['Source code','Compile','Load','Process','Exit'],k:'Process=A running program with its own memory;Thread=Execution path inside a process;Heap=Memory allocated dynamically at run time',w:'Buffer overflows corrupt stack or heap memory, injection flaws abuse how programs handle input, and malware shows up as suspicious processes you can inspect. Secure application development begins with understanding execution.',x:'A login form copies a long username into a small buffer without checking the length. Extra bytes spill into neighbouring memory, which is a classic overflow.'},
{t:'Computer Security Fundamentals',b:['Malware is software built to harm or spy: viruses, worms, trojans, ransomware and spyware. It hides by using disguised file names, creating persistence (startup entries), running inside legitimate processes, and abusing permissions.','Core defences: install updates, use least privilege, keep tested backups, encrypt data, run endpoint protection, and be cautious with attachments. Common weaknesses: unpatched software, weak or reused passwords, excessive permissions and unsafe downloads.'],d:['Patch','Least privilege','Backup','Encrypt','Monitor'],k:'Ransomware=Malware that encrypts files for payment;Persistence=Way malware survives restarts;Least privilege=Giving only the access that is needed',w:'Every earlier concept appears in real incidents: malware runs as a process, hides in files, lives in RAM and may infect boot. Security work is applying computer fundamentals to find, contain and prevent damage.',x:'A staff laptop is hit by ransomware. Offline backups and limited permissions turn a disaster into a few hours of restoring files.'}];
const Q=[
[0,'Which component fetches, decodes and executes program instructions?','CPU|RAM|Motherboard|Monitor','The CPU runs instructions. RAM only holds data temporarily, the motherboard connects parts, and a monitor merely displays output.'],
[0,'Which of these is an output device?','Printer|Keyboard|Microphone|Scanner','A printer produces results. Keyboards, microphones and scanners all send data into the computer.'],
[0,'Firmware is best described as…','Software stored on a hardware chip that starts the device|A type of RAM|A web browser|A cable standard','Firmware lives on chips and runs first at power-on. It is not memory, an application or a connector.'],
[0,'A malicious USB device that types commands automatically is an attack on which layer?','Hardware and input trust|The monitor|ROM size|Cache speed','The computer trusts input devices. A fake keyboard abuses that trust directly, without any file to scan.'],
[1,'How many bits are in one byte?','8|4|16|32','A byte is defined as 8 bits. Four bits is a nibble (one hex digit).'],
[1,'What is binary 1010 in decimal?','10|8|12|5','8+0+2+0 = 10. Add the place values wherever there is a 1.'],
[1,'What is hexadecimal FF in decimal?','255|15|256|16','F is 15, so FF = 15×16 + 15 = 255, the largest value of one byte.'],
[1,'A file begins with bytes 4D 5A. It is most likely…','A Windows executable|A JPEG image|A plain text note|An audio clip','4D 5A is ASCII MZ, the signature of Windows executables, whatever the file is named.'],
[2,'Which unit performs arithmetic and logical operations?','ALU|Control Unit|ROM|Motherboard','The ALU does the maths and comparisons. The Control Unit directs the flow of work.'],
[2,'What is the correct order of the instruction cycle?','Fetch, Decode, Execute|Execute, Fetch, Decode|Decode, Fetch, Execute|Fetch, Execute, Decode','An instruction must be fetched before it can be decoded, and decoded before it can be executed.'],
[2,'The program counter register stores…','The address of the next instruction|A user password|A file size|The screen resolution','It points at the next instruction, which is why attackers want to control it.'],
[2,'Why do exploits aim to control the instruction pointer?','The attacker then chooses which code the CPU runs|It brightens the display|It deletes RAM|It speeds up the CPU','Whatever address the pointer holds is fetched and executed next, so controlling it controls the program.'],
[3,'Which of these is volatile memory?','RAM|SSD|HDD|USB flash drive','RAM loses its contents at power-off. The others keep data without power.'],
[3,'What is cache memory used for?','Keeping frequently used data close to the CPU|Storing backups|Booting the OS|Connecting to a network','Cache reduces waiting for slower RAM by holding recently used data.'],
[3,'Virtual memory uses what as overflow for RAM?','Disk space|The monitor|Cache|ROM','The OS moves less-used pages to a page file or swap area on disk.'],
[3,'Why do forensic teams capture RAM?','It can hold running processes, keys and malware never saved to disk|It is permanent|It is smaller than a disk|Disks are never useful','RAM shows live system state and is lost when power is cut, so it must be captured first.'],
[4,'The file invoice.pdf.exe is most likely…','An executable disguised as a PDF|A safe PDF|A picture|A font','The final extension decides how it runs. This is a common trick to disguise malware.'],
[4,'After a normal delete, the file data usually…','Remains until overwritten|Is physically destroyed|Moves to RAM|Is encrypted','Deleting normally frees the space but does not erase it, which makes recovery possible.'],
[4,'What does the Linux permission x mean?','Execute|Delete|Encrypt|Copy','r is read, w is write and x is execute. Deletion is controlled by the folder.'],
[4,'Which practice best limits damage when an account is compromised?','Least privilege permissions|Giving everyone write access|Hiding extensions|Disabling the file system','Fewer permissions means an attacker can reach and change less.'],
[5,'What does POST stand for?','Power-On Self-Test|Primary OS Start Task|Protected Operating System Table|Process Open Security Token','POST is the hardware check firmware runs when the machine starts.'],
[5,'Which feature verifies bootloader signatures?','Secure Boot|Defragmentation|Cache|Hibernation','Secure Boot lets UEFI run only signed, trusted boot software.'],
[5,'Which is the correct startup order?','POST, bootloader, OS kernel|OS kernel, POST, bootloader|Bootloader, POST, login|Login, POST, kernel','Hardware is checked first, then the bootloader runs, then the kernel loads.'],
[5,'Why do attackers target the boot process?','Their code runs before security tools start|It speeds up Wi-Fi|It deletes ROM|It is easier to type commands','Code that runs first can hide from everything that loads later.'],
[6,'Which tool translates all source code into machine code before it runs?','Compiler|Interpreter|BIOS|Cache','A compiler translates ahead of time. An interpreter executes step by step.'],
[6,'Threads are…','Execution paths inside a process|Separate computers|Types of RAM|File types','A process can contain several threads that share its memory.'],
[6,'A buffer overflow happens when a program writes data…','Beyond the memory space reserved for it|Past the screen edge|Over a long file name|Too fast for the network','Extra data spills into neighbouring memory and can corrupt control data.'],
[7,'Which malware encrypts files and demands payment?','Ransomware|Spyware|Adware|A keylogger','Ransomware locks data and demands a ransom to restore it.'],
[7,'What best protects data from ransomware loss?','Tested offline backups|Disabling updates|Reusing passwords|Ignoring alerts','Offline backups cannot be encrypted by malware on the live system.'],
[7,'A process named svch0st.exe (with a zero) running from the Downloads folder is…','Suspicious masquerading|A normal Windows service|A hardware driver|BIOS','It imitates svchost.exe but has the wrong spelling and location. This is a classic hiding trick.']];
const LV=['Easy','Easy','Medium','Hard'],cn={};Q.forEach(r=>{const p=cn[r[0]]=cn[r[0]]||0;r.push(LV[p]);cn[r[0]]++});
const LABS=[
{t:'Identify computer hardware',qs:[[0,'Which part is the “brain” that executes instructions?','CPU|Power cable|Speaker|Mouse','The CPU performs processing.'],[0,'Which part holds data only while the computer is on?','RAM|SSD|ROM chip|Hard disk','RAM is volatile working memory.'],[0,'Which part connects the CPU, RAM and other components?','Motherboard|Printer|Webcam|Router','The motherboard is the main circuit board.']]},
{t:'Convert binary to decimal',bin:1},
{t:'Identify file extensions',qs:[[0,'Is report.docx from a known colleague likely safe or suspicious?','Likely safe (still scan it)|Definitely malware|A hardware driver|A boot file','.docx is a document format, so it is expected from a colleague. Still, macros could be abused.'],[0,'What is photo.jpg.exe?','Suspicious: an executable pretending to be a photo|A safe photo|A text file|A sound file','The real extension is the last one, .exe, which runs code.'],[0,'An unknown email asks you to run setup.scr. What is it?','Suspicious: .scr files can run code|A screenshot|A safe image|A font','.scr is a screensaver format that executes code and is often abused.']]},
{t:'RAM versus storage',qs:[[0,'An unsaved document you are typing lives in…','RAM|SSD|ROM|The cloud','Unsaved work is in volatile RAM and is lost on power-off.'],[0,'Photos saved to your SSD are held in…','Storage|RAM only|Cache only|Registers','Storage is persistent and keeps data without power.'],[0,'After a sudden power cut, which is lost?','Data in RAM|Data on the SSD|Files in storage|Installed programs','RAM is volatile; storage survives.']]},
{t:'Simulate the boot process',boot:1},
{t:'Investigate a suspicious file',qs:[[0,'You receive salary_update.pdf.exe from an unknown sender. Best first action?','Do not open it; report it and scan it|Open it to check|Forward it to colleagues|Rename it to .pdf','Opening or sharing risks infection. Reporting and scanning is safe.'],[0,'Which clue makes the file most suspicious?','Double extension ending in .exe|The word salary|It is an email attachment|It has a name','The final .exe means it runs as a program despite looking like a PDF.'],[0,'To check what it really is without running it, you could…','Inspect its first bytes or hash it|Double-click it|Disable your antivirus|Email it to yourself','4D 5A bytes or a hash lookup identify files safely without execution.']]},
{t:'Identify basic malware behaviour',qs:[[0,'A program locks your files and shows a payment note. This is…','Ransomware|A worm|Adware|A driver','Locking files for payment is ransomware.'],[0,'A hidden program records everything you type. This is…','Spyware (keylogger)|Ransomware|A compiler|Firmware','Capturing keystrokes is spyware behaviour.'],[0,'A program copies itself across the network with no user action. This is…','A worm|A bootloader|A cache|A thread','Self-spreading without user action defines a worm.']]}];
// ---- STATE ----
const def={xp:0,done:{},streak:0,last:'',name:'',exam:{best:0,passed:false}};
let S;try{S=Object.assign({},def,JSON.parse(localStorage.getItem(CP.key)||'{}'))}catch(e){S=Object.assign({},def)}
const save=()=>{try{localStorage.setItem(CP.key,JSON.stringify(S))}catch(e){}};
const $=s=>document.querySelector(s),shuf=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let tt;const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),3200)};
function touch(){const d=new Date(),f=x=>x.toISOString().slice(0,10),t=f(d);if(S.last===t)return;const y=new Date(d);y.setDate(d.getDate()-1);S.streak=S.last===f(y)?S.streak+1:1;S.last=t}
function award(k,xp,label){if(S.done[k])return;S.done[k]=1;S.xp+=xp;touch();save();toast('🏅 '+label+' · +'+xp+' XP')}
const modsDone=()=>M.filter((_,i)=>S.done['m'+i]).length,labsDone=()=>LABS.filter((_,i)=>S.done['l'+i]).length,allMods=()=>modsDone()===M.length;
// ---- QUIZ ENGINE ----
const prep=qs=>qs.map(r=>{const o=r[2].split('|'),c=o[0];shuf(o);return{q:r[1],o,a:o.indexOf(c),e:r[3],lv:r[4]}});
function mkQuiz(root,gen,need,done){const items=gen(),res=[];
root.innerHTML=items.map((it,i)=>`<div class="q" data-i="${i}"><p><b>${i+1}.</b> ${it.q}</p>${it.o.map((o,j)=>`<button class="opt" data-j="${j}">${o}</button>`).join('')}<div class="fb" aria-live="polite"></div></div>`).join('')+'<div class="res"></div>';
root.onclick=e=>{if(e.target.dataset.retry!==undefined){mkQuiz(root,gen,need,done);return}
const b=e.target.closest('.opt');if(!b)return;const q=b.closest('.q'),i=+q.dataset.i;if(res[i]!==undefined)return;const j=+b.dataset.j,ok=j===items[i].a;res[i]=ok;
q.querySelectorAll('.opt').forEach((x,k)=>{x.disabled=true;if(k===items[i].a)x.classList.add('ok');else if(k===j)x.classList.add('bad')});
q.querySelector('.fb').innerHTML=(ok?'✔ Correct. ':'✖ Not quite. ')+items[i].e;
if(res.filter(v=>v!==undefined).length===items.length){const n=res.filter(Boolean).length,p=n/items.length>=need;
root.querySelector('.res').innerHTML=`<p class="score ${p?'ok':'bad'}">Score ${n}/${items.length} — ${p?'Passed ✔':'You need '+Math.ceil(need*items.length)+' correct to pass'}</p>`+(p?'':'<button class="btn" data-retry>Retry with reshuffled options</button>');if(p)done()}}}
function binLab(root,done){let ok=0,n,msg='';const nx=()=>{n=1+Math.floor(Math.random()*63);root.innerHTML=`<p>${msg}Convert <b class="mono">${n.toString(2).padStart(6,'0')}</b> to decimal. Correct so far: ${ok}/3</p><label class="mu" for="bi">Decimal answer</label> <input id="bi" type="number" inputmode="numeric"><button class="btn">Check</button><div class="fb"></div>`;
root.querySelector('button').onclick=()=>{const v=root.querySelector('input').value;if(v!==''&&+v===n){ok++;if(ok>=3){root.innerHTML='<p class="score ok">✔ Lab complete: 3 correct conversions.</p>';done();return}msg='✔ Correct! Next one. ';nx()}else root.querySelector('.fb').textContent='✖ Not yet. Add the place values 32, 16, 8, 4, 2, 1 wherever there is a 1.'}};nx()}
function bootLab(root,done){const st=['Power button pressed','POST checks CPU and RAM','Firmware finds the boot device','Bootloader runs','OS kernel loads','Login screen appears'],sh=shuf([...st]);let k=0;
const draw=()=>{root.innerHTML='<p>Click the stages in the order a computer boots.</p><ol>'+st.slice(0,k).map(s=>`<li class="ok">${s}</li>`).join('')+'</ol>'+sh.filter(s=>st.indexOf(s)>=k).map(s=>`<button class="opt">${s}</button>`).join('')+'<div class="fb"></div>';
root.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{if(b.textContent===st[k]){k++;if(k===st.length){root.innerHTML='<p class="score ok">✔ Boot sequence complete: POST → firmware → bootloader → kernel → login.</p>';done()}else draw()}else root.querySelector('.fb').textContent='✖ Not yet. Think about what must already exist before that stage can run.'})};draw()}
// ---- VIEWS ----
let P=[],E=null;
const dia=d=>'<div class="dia">'+d.map(x=>`<span class="node">${x}</span>`).join('<span class="arr" aria-hidden="true">→</span>')+'</div>';
const badges=()=>M.map((m,i)=>[S.done['m'+i],'Module '+(i+1)]).concat([[labsDone()===LABS.length,'Lab Specialist'],[S.exam.passed,'Checkpoint 01 Complete']]);
function nextHref(){const i=M.findIndex((_,i)=>!S.done['m'+i]);return i>=0?['#m-'+(i+1),'Continue Learning: Module '+(i+1)]:!S.exam.passed?['#exam','Continue: Final Exam']:['#certificate','View Certificate']}
function dashboard(){
  const total=M.length+LABS.length+1;
  const completed=modsDone()+labsDone()+(S.exam.passed?1:0);
  const pct=Math.round(completed/total*100);

  const level=Math.floor(S.xp/200)+1;
  const levelXp=S.xp%200;
  const xpPct=Math.round(levelXp/200*100);

  const mi=M.findIndex((_,i)=>!S.done['m'+i]);
  const li=LABS.findIndex((_,i)=>!S.done['l'+i]);

  let missionTitle,missionLink,missionType;

  if(mi!==-1){
    missionTitle='Module '+(mi+1)+': '+M[mi].t;
    missionLink='#m-'+(mi+1);
    missionType='LEARNING MISSION';
  }else if(li!==-1){
    missionTitle='Lab '+(li+1)+': '+LABS[li].t;
    missionLink='#lab';
    missionType='PRACTICAL MISSION';
  }else if(!S.exam.passed){
    missionTitle='Final Checkpoint Exam';
    missionLink='#exam';
    missionType='FINAL CHALLENGE';
  }else{
    missionTitle='Checkpoint completed';
    missionLink='#certificate';
    missionType='MISSION COMPLETE';
  }

  return `
  <div class="mono">CYBER ACADEMY / PLAYER DASHBOARD</div>
  <h1>Mission Control</h1>
  <p class="mu">Learn the system. Understand the threats. Build your security foundations.</p>

  <div class="card">
    <div class="mono">PLAYER PROFILE</div>
    <h2 style="margin:8px 0">Cyber Learner <span class="tag">LEVEL ${level}</span></h2>
    <div class="grid">
      <div>
        <div class="mu">TOTAL EXPERIENCE</div>
        <div class="big">${S.xp} XP</div>
      </div>
      <div>
        <div class="mu">CURRENT LEVEL</div>
        <div class="big">${level}</div>
      </div>
      <div>
        <div class="mu">DAY STREAK</div>
        <div class="big">${S.streak} 🔥</div>
      </div>
    </div>
    <p class="mu">Progress to Level ${level+1}: ${levelXp}/200 XP</p>
    <div class="bar"><i style="width:${xpPct}%"></i></div>
  </div>

  <div class="card why">
    <div class="mono">${missionType}</div>
    <h2 style="margin:8px 0">${missionTitle}</h2>
    <p class="mu">${S.exam.passed?'You have completed this checkpoint. Review your achievement or certificate.':'Continue your training and earn experience by completing learning activities.'}</p>
    <a class="btn" href="${missionLink}">${S.exam.passed?'View achievement':'Continue mission →'}</a>
  </div>

  <h2>Academy Progress</h2>
  <div class="card">
    <div class="grid">
      <div><h3>${completed}/${total}</h3><p class="mu">Activities completed</p></div>
      <div><h3>${pct}%</h3><p class="mu">Overall progress</p></div>
      <div><h3>${modsDone()}/${M.length}</h3><p class="mu">Learning modules</p></div>
      <div><h3>${labsDone()}/${LABS.length}</h3><p class="mu">Practical labs</p></div>
    </div>
    <div class="bar"><i style="width:${pct}%"></i></div>
  </div>

  <h2>Learning Mission Map</h2>
  <p class="mu">Complete each knowledge check to earn 100 XP and mark its mission complete.</p>
  <div class="grid">
    ${M.map((m,i)=>`
      <a class="card" href="#m-${i+1}">
        <div class="mono">MISSION ${String(i+1).padStart(2,'0')}</div>
        <h3>${m.t}</h3>
        <p class="mu">${S.done['m'+i]?'✓ COMPLETED':'○ AVAILABLE'}</p>
        <span class="chip ${S.done['m'+i]?'on':'off'}">${S.done['m'+i]?'+100 XP EARNED':'100 XP REWARD'}</span>
      </a>
    `).join('')}
  </div>

  <h2>Practical Operations</h2>
  <div class="card">
    <h3>Cyber Lab</h3>
    <p class="mu">${labsDone()} of ${LABS.length} practical challenges completed.</p>
    <div class="bar"><i style="width:${Math.round(labsDone()/LABS.length*100)}%"></i></div>
    <a class="btn" href="#lab">Enter Cyber Lab →</a>
  </div>

  <div class="card">
    <h3>Final Checkpoint Exam</h3>
    <p class="mu">${S.exam.passed?'✓ Exam passed. Your certificate is unlocked.':allMods()?'All modules completed. You can attempt the final exam.':'Complete all eight module knowledge checks to unlock the exam.'}</p>
    <p>Best score: ${S.exam.best}/30</p>
    <a class="btn" href="${S.exam.passed?'#certificate':'#exam'}">${S.exam.passed?'View Certificate':'View Final Exam →'}</a>
  </div>

  <h2>Achievements</h2>
  <div class="card">
    ${badges().map(b=>`<span class="chip ${b[0]?'on':'off'}">${b[0]?'🏅':'🔒'} ${b[1]}</span>`).join('')}
  </div>
  `;
}
function modules(){
  const completed=modsDone();

  return `
    <div class="mono">CYBER ACADEMY / TRAINING MAP</div>
    <h1>Learning Missions</h1>
    <p class="mu">Eight missions. One foundation. Learn how computers work before learning how to secure them.</p>

    <section class="module-overview">
      <div>
        <div class="mono">YOUR TRAINING PROGRESS</div>
        <h2>${completed} / ${M.length} Missions Completed</h2>
        <p class="mu">${Math.round(completed/M.length*100)}% of the learning path completed</p>
      </div>
      <div class="bar"><i style="width:${completed/M.length*100}%"></i></div>
    </section>

    <div class="mission-grid">
      ${M.map((m,i)=>{
        const done=!!S.done['m'+i];
        const questions=Q.filter(q=>q[0]===i);
        const levels=questions.map(q=>q[4]);
        const difficulty=levels.includes('Hard')?'ADVANCED':
          levels.includes('Medium')?'INTERMEDIATE':'FOUNDATION';

        return `
          <a class="mission-card ${done?'mission-complete':''}" href="#m-${i+1}">
            <div class="mission-top">
              <span class="mission-number">${String(i+1).padStart(2,'0')}</span>
              <span class="mission-status">${done?'✓ COMPLETED':'AVAILABLE'}</span>
            </div>
            <div class="mono">MISSION ${String(i+1).padStart(2,'0')}</div>
            <h3>${m.t}</h3>
            <p class="mu">${m.b[0]}</p>
            <div class="mission-concepts">
              ${m.d.slice(0,3).map(x=>`<span class="chip">${x}</span>`).join('')}
            </div>
            <div class="mission-footer">
              <span>${questions.length} questions</span>
              <span>${difficulty}</span>
              <strong>${done?'100 XP EARNED':'+100 XP'}</strong>
            </div>
            <div class="bar"><i style="width:${done?100:0}%"></i></div>
            <span class="mission-open">${done?'Review mission →':'Start mission →'}</span>
          </a>
        `;
      }).join('')}
    </div>
  `;
}
function module(i){const m=M[i];
P.push(()=>mkQuiz($('#kc'),()=>prep(Q.filter(r=>r[0]===i)),.75,()=>{award('m'+i,100,'Module '+(i+1)+' badge unlocked');const l=$('#st');if(l)l.textContent='✔ Completed'}));
return `<p class="mono">MODULE ${String(i+1).padStart(2,'0')} · <span id="st">${S.done['m'+i]?'✔ Completed':'In progress'}</span></p><h1>${m.t}</h1>${m.b.map(p=>`<p>${p}</p>`).join('')}
<h2>Visual diagram</h2><div class="card">${dia(m.d)}</div>
<h2>Key terminology</h2><div class="card">${m.k.split(';').map(t=>{const[a,b]=t.split('=');return `<p><b class="mono">${a}</b> — ${b}</p>`}).join('')}</div>
<h2>Real-world example</h2><div class="card"><p>${m.x}</p></div>
<div class="card why"><h2 style="margin-top:0">WHY DOES THIS MATTER IN CYBERSECURITY?</h2><p>${m.w}</p></div>
<h2>Knowledge check</h2><p class="mu">Answer every question. Difficulty rises through the set.</p><div class="card" id="kc"></div>
<p>${i>0?`<a class="btn" href="#m-${i}">← Previous</a>`:''}${i<M.length-1?`<a class="btn" href="#m-${i+2}">Next module →</a>`:'<a class="btn" href="#exam">Final exam →</a>'}</p>`}
function lab(){
  const completed = LABS.filter((l,i)=>!!S.done['l'+i]).length;

  LABS.forEach((l,i)=>P.push(()=>{
    const r=$('#lab'+i);
    const d=()=>{award('l'+i,40,'Lab '+(i+1)+' complete')};
    l.bin?binLab(r,d):l.boot?bootLab(r,d):mkQuiz(r,()=>prep(l.qs),1,d);
  }));

  return `
    <div class="mono">CYBER ACADEMY / OPERATIONS CENTRE</div>
    <h1>Cyber Lab</h1>
    <p class="mu">Practice identifying risks, investigating files and understanding system behaviour through safe simulations.</p>

    <section class="lab-overview">
      <div>
        <div class="mono">FIELD TRAINING PROGRESS</div>
        <h2>${completed} / ${LABS.length} Challenges Completed</h2>
        <p class="mu">Earn 40 XP for each completed challenge.</p>
      </div>
      <div class="bar"><i style="width:${completed/LABS.length*100}%"></i></div>
    </section>

    <div class="lab-safety">
      <strong>◈ SAFE SIMULATION MODE</strong>
      <p>These exercises run inside this learning app. No real malware is executed and no real system files are modified.</p>
    </div>

    <div class="lab-grid">
      ${LABS.map((l,i)=>{
        const done=!!S.done['l'+i];
        const type=l.bin?'BINARY ANALYSIS':l.boot?'SYSTEM INVESTIGATION':'SECURITY CHALLENGE';
        return `
          <section class="lab-card ${done?'lab-complete':''}">
            <div class="lab-card-top">
              <span class="mission-number">LAB ${String(i+1).padStart(2,'0')}</span>
              <span class="mission-status">${done?'✓ COMPLETED':'READY'}</span>
            </div>
            <div class="mono">${type}</div>
            <h3>${l.t}</h3>
            <div class="lab-reward">+40 XP <span>${done?'REWARD CLAIMED':'COMPLETION REWARD'}</span></div>
            <div id="lab${i}"></div>
          </section>
        `;
      }).join('')}
    </div>
  `;
}
function exam(){
if(!allMods())return `<h1>Final Checkpoint Exam</h1><div class="card"><p>🔒 Locked. Complete all 8 modules first (${modsDone()}/8 done).</p><a class="btn" href="${nextHref()[0]}">${nextHref()[1]}</a></div>`;
if(!E)return `<h1>Final Checkpoint Exam</h1><div class="card"><p>30 randomized multiple-choice questions · ${CP.secs/60} minutes · pass mark ${CP.pass*100}% (24/30).</p><p class="mu">Best score: ${S.exam.best}/30</p><button class="btn" data-act="start">Start exam</button></div>`;
if(E.fin)return result();
const q=E.qs[E.i];P.push(()=>{E.tick=()=>{const s=Math.max(0,Math.round((E.end-Date.now())/1000)),t=$('#tm');if(t)t.textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');if(s<=0){finish();toast('⏰ Time is up: exam submitted')}};E.tick()});
return `<h1>Final Checkpoint Exam</h1><p class="score">⏱ <span id="tm" class="mono">--:--</span> · Question ${E.i+1}/30<span class="tag">${q.lv}</span></p><div class="bar"><i style="width:${(E.i+1)/30*100}%"></i></div>
<div class="card"><p><b>${q.q}</b></p>${q.o.map((o,j)=>`<button class="opt ${E.ans[E.i]===j?'sel':''}" data-act="pick" data-j="${j}">${o}</button>`).join('')}</div>
<button class="btn" data-act="prev" ${E.i?'':'disabled'}>← Back</button>${E.i<29?'<button class="btn" data-act="next">Next →</button>':'<button class="btn" data-act="submit">Submit exam</button>'}<p class="mu">Answered ${E.ans.filter(v=>v!==undefined).length}/30</p>`}
function finish(){if(E.fin)return;clearInterval(E.iv);E.fin=1;E.score=E.qs.filter((q,i)=>E.ans[i]===q.a).length;E.pass=E.score/30>=CP.pass;S.exam.best=Math.max(S.exam.best,E.score);
if(E.pass){S.exam.passed=true;award('exam',300,'Checkpoint 01 Complete');}save();if((location.hash||'#dashboard')==='#exam')render()}
function result(){return `<h1>Exam Results</h1><div class="card"><p class="big">${E.score}/30 · ${Math.round(E.score/30*100)}%</p><p class="score ${E.pass?'ok':'bad'}">${E.pass?'PASSED ✔':'Not passed. 80% (24/30) is required.'}</p>
${E.pass?`<div class="cert" style="margin:12px 0"><h2>CHECKPOINT 01 COMPLETED</h2><p>“${CP.quote}”</p><p class="mono">Next checkpoint: ${CP.next}</p></div><a class="btn" href="#certificate">Get certificate</a>`:''}<button class="btn" data-act="retake">Retake exam</button></div>
<h2>Answer review</h2>${E.qs.map((q,i)=>{const u=E.ans[i],ok=u===q.a;return `<div class="card"><p><b>${i+1}. ${q.q}</b> <span class="score ${ok?'ok':'bad'}">${ok?'✔':'✖'}</span></p><p class="mu">Your answer: ${u===undefined?'(none)':q.o[u]}</p>${ok?'':`<p>Correct: ${q.o[q.a]}</p>`}<p class="fb">${q.e}</p></div>`}).join('')}`}
function certificate(){if(!S.exam.passed)return '<h1>Certificate</h1><div class="card"><p>🔒 Pass the final exam to unlock your certificate.</p><a class="btn" href="#exam">Go to exam</a></div>';
return `<h1>Certificate</h1><div class="noprint"><label class="mu" for="nm">Name on certificate</label><br><input id="nm" maxlength="60" value="${esc(S.name)}"><button class="btn" data-act="name">Update</button><button class="btn" data-act="print">Print / Save PDF</button></div>
<div class="cert"><p class="mono">CERTIFICATE OF COMPLETION</p><h2>${CP.title} — CHECKPOINT 01</h2><p>This certifies that</p><p class="big">${esc(S.name||'Cyber Learner')}</p><p>has passed the final checkpoint with a best score of ${S.exam.best}/30.</p><p class="mu">${CP.tag}</p><p class="mu">Next: ${CP.next}</p></div>`}
function examPulse(){
  if(!E || E.fin) return;
  if(location.hash !== '#exam'){
    E.remaining = Math.max(0, E.end - Date.now());
    clearInterval(E.iv);
    E.iv = null;
    E.paused = true;
    return;
  }
  if(E.tick) E.tick();
}
// ---- ROUTER ----
function render(){
P=[];
if(E&&!E.fin){
  if(location.hash==='#exam'){
    if(E.paused){
      E.end=Date.now()+E.remaining;
      E.paused=false;
    }
    if(!E.iv) E.iv=setInterval(examPulse,1000);
  }else if(E.iv){
    E.remaining=Math.max(0,E.end-Date.now());
    clearInterval(E.iv);
    E.iv=null;
    E.paused=true;
  }
}
const h=location.hash.slice(1)||'dashboard',m=/^m-([1-8])$/.exec(h);
const v=m?module(+m[1]-1):({dashboard,modules,lab,exam,certificate}[h]||dashboard)();
$('#app').innerHTML=v;document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.dataset.v===h||(m&&a.dataset.v==='modules')));window.scrollTo(0,0);P.forEach(f=>f())}
document.addEventListener('click',e=>{const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act;
if(a==='start'){E={qs:shuf(prep(Q)),i:0,ans:[],end:Date.now()+CP.secs*1000};E.iv=setInterval(examPulse,1000);render()}
else if(a==='pick'){E.ans[E.i]=+b.dataset.j;render()}
else if(a==='next'){E.i++;render()}else if(a==='prev'){E.i--;render()}
else if(a==='submit'){const left=30-E.ans.filter(v=>v!==undefined).length;if(left&&!confirm(left+' question(s) unanswered. Submit anyway?'))return;finish();render()}
else if(a==='retake'){E=null;render()}
else if(a==='name'){S.name=$('#nm').value.trim();save();render();toast('Name updated')}
else if(a==='print')window.print()});
window.addEventListener('hashchange',render);render();
