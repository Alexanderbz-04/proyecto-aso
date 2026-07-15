const headers=document.querySelectorAll(".accordion-header");

headers.forEach(header=>{

header.addEventListener("click",()=>{

const content=header.nextElementSibling;

content.classList.toggle("active");

});

});

const glosario = [

{
titulo:"ALU",
descripcion:"Unidad Aritmético Lógica encargada de realizar operaciones matemáticas y lógicas."
},

{
titulo:"Algoritmo",
descripcion:"Conjunto ordenado de instrucciones para resolver un problema."
},

{
titulo:"Algoritmo FIFO",
descripcion:"Método de reemplazo de páginas que elimina la página más antigua en memoria."
},

{
titulo:"Algoritmo LRU",
descripcion:"Método de reemplazo que elimina la página utilizada hace más tiempo."
},

{
titulo:"Arquitectura de Computadoras",
descripcion:"Diseño y organización de los componentes físicos y lógicos de un sistema informático."
},

{
titulo:"Arquitectura Von Neumann",
descripcion:"Modelo de computadora donde instrucciones y datos comparten la misma memoria."
},

{
titulo:"Buffer",
descripcion:"Memoria temporal utilizada durante las operaciones de entrada y salida."
},

{
titulo:"Buffering",
descripcion:"Técnica que utiliza un buffer para mejorar la transferencia de datos."
},

{
titulo:"Bus",
descripcion:"Canal de comunicación que transporta datos, direcciones y señales de control."
},

{
titulo:"Bus de Datos",
descripcion:"Transporta la información entre CPU, memoria y dispositivos."
},

{
titulo:"Bus de Direcciones",
descripcion:"Transporta las direcciones de memoria."
},

{
titulo:"Bus de Control",
descripcion:"Transporta señales de sincronización y control."
},

{
titulo:"Caché",
descripcion:"Memoria muy rápida utilizada para almacenar datos de acceso frecuente."
},

{
titulo:"Cloud Computing",
descripcion:"Modelo de provisión de recursos informáticos mediante Internet."
},

{
titulo:"CPU",
descripcion:"Unidad Central de Procesamiento encargada de ejecutar instrucciones."
},

{
titulo:"DMA",
descripcion:"Acceso Directo a Memoria que permite transferencias sin intervención constante de la CPU."
},

{
titulo:"DNS",
descripcion:"Sistema encargado de traducir nombres de dominio en direcciones IP."
},

{
titulo:"Driver",
descripcion:"Programa que permite la comunicación entre el sistema operativo y un dispositivo."
},

{
titulo:"Entrada/Salida",
descripcion:"Operaciones mediante las cuales el sistema recibe y entrega información."
},

{
titulo:"FCFS",
descripcion:"Algoritmo de planificación que atiende primero al proceso que llega primero."
},

{
titulo:"Fallo de Página",
descripcion:"Evento que ocurre cuando una página requerida no está cargada en memoria física."
},

{
titulo:"Hardware",
descripcion:"Conjunto de componentes físicos de un sistema informático."
},

{
titulo:"Hipervisor",
descripcion:"Software encargado de administrar máquinas virtuales."
},

{
titulo:"Host",
descripcion:"Equipo físico sobre el cual se ejecutan máquinas virtuales."
},

{
titulo:"IaaS",
descripcion:"Infraestructura como Servicio."
},

{
titulo:"Interrupción",
descripcion:"Señal que interrumpe temporalmente la ejecución de la CPU para atender un evento."
},

{
titulo:"IP",
descripcion:"Dirección lógica que identifica un dispositivo dentro de una red."
},

{
titulo:"Kernel",
descripcion:"Núcleo del sistema operativo encargado de administrar los recursos."
},

{
titulo:"LAN",
descripcion:"Red de Área Local utilizada para conectar dispositivos en un espacio reducido."
},

{
titulo:"Linux",
descripcion:"Sistema operativo de código abierto basado en Unix."
},

{
titulo:"Little Man Computer",
descripcion:"Modelo educativo que simula el funcionamiento básico de una computadora."
},

{
titulo:"LRU",
descripcion:"Algoritmo de reemplazo de páginas basado en el uso reciente."
},

{
titulo:"Marco de Página",
descripcion:"Bloque de memoria física donde se carga una página."
},

{
titulo:"Memoria",
descripcion:"Componente encargado de almacenar datos e instrucciones."
},

{
titulo:"Memoria Caché",
descripcion:"Memoria de alta velocidad ubicada entre la CPU y la RAM."
},

{
titulo:"Memoria Física",
descripcion:"Memoria RAM instalada en el equipo."
},

{
titulo:"Memoria Principal",
descripcion:"Otra denominación de la memoria RAM."
},

{
titulo:"Memoria RAM",
descripcion:"Memoria volátil utilizada por los programas en ejecución."
},

{
titulo:"Memoria Secundaria",
descripcion:"Dispositivos de almacenamiento permanente como HDD y SSD."
},

{
titulo:"Memoria Virtual",
descripcion:"Técnica que utiliza disco para ampliar la memoria disponible."
},

{
titulo:"MMU",
descripcion:"Unidad de Gestión de Memoria encargada de traducir direcciones virtuales."
},

{
titulo:"Monoprogramación",
descripcion:"Sistema donde solo un programa utiliza la CPU a la vez."
},

{
titulo:"Multiprogramación",
descripcion:"Permite mantener varios procesos en memoria para aprovechar mejor la CPU."
},

{
titulo:"Multitarea",
descripcion:"Capacidad del sistema operativo para ejecutar múltiples procesos aparentemente al mismo tiempo."
},

{
titulo:"Página",
descripcion:"Bloque de memoria virtual de tamaño fijo."
},

{
titulo:"Paginación",
descripcion:"Método de administración de memoria basado en páginas y marcos."
},

{
titulo:"Pagefile",
descripcion:"Archivo de paginación utilizado por Windows."
},

{
titulo:"PaaS",
descripcion:"Plataforma como Servicio."
},

{
titulo:"Ping",
descripcion:"Herramienta utilizada para comprobar la conectividad entre equipos."
},

{
titulo:"Planificador",
descripcion:"Componente del sistema operativo encargado de decidir qué proceso utilizará la CPU."
},

{
titulo:"Proceso",
descripcion:"Programa que se encuentra en ejecución y utiliza recursos del sistema."
},

{
titulo:"Proceso Huérfano",
descripcion:"Proceso cuyo proceso padre finalizó antes que él."
},

{
titulo:"Proceso Zombi",
descripcion:"Proceso que terminó su ejecución pero aún mantiene información en la tabla de procesos."
},

{
titulo:"Programa",
descripcion:"Conjunto de instrucciones almacenadas que pueden ejecutarse."
},

{
titulo:"Puerta de Enlace",
descripcion:"Dispositivo que permite la comunicación entre diferentes redes."
},

{
titulo:"RAM",
descripcion:"Memoria principal de acceso aleatorio utilizada durante la ejecución de programas."
},

{
titulo:"Registro",
descripcion:"Memoria interna del procesador de muy alta velocidad."
},

{
titulo:"Rendimiento",
descripcion:"Medida de la eficiencia con la que un sistema realiza sus tareas."
},

{
titulo:"Round Robin",
descripcion:"Algoritmo de planificación que asigna un tiempo fijo de CPU a cada proceso."
},

{
titulo:"Router",
descripcion:"Dispositivo encargado de conectar diferentes redes y dirigir el tráfico de datos."
},

{
titulo:"SaaS",
descripcion:"Software como Servicio accesible mediante Internet."
},

{
titulo:"Scheduler",
descripcion:"Nombre en inglés del planificador de procesos."
},

{
titulo:"Servidor",
descripcion:"Equipo o software que ofrece servicios a otros dispositivos de la red."
},

{
titulo:"Sistema de Archivos",
descripcion:"Método utilizado para organizar y almacenar archivos en un dispositivo."
},

{
titulo:"Sistema Operativo",
descripcion:"Software de base que administra el hardware y proporciona servicios a los programas."
},

{
titulo:"Software",
descripcion:"Conjunto de programas que permiten el funcionamiento de un sistema informático."
},

{
titulo:"Software de Base",
descripcion:"Programas fundamentales para el funcionamiento de la computadora, como el sistema operativo."
},

{
titulo:"SSD",
descripcion:"Unidad de almacenamiento de estado sólido, más rápida que un disco rígido."
},

{
titulo:"Swap",
descripcion:"Espacio en disco utilizado como extensión de la memoria RAM."
},

{
titulo:"Switch",
descripcion:"Dispositivo de red que conecta equipos dentro de una LAN."
},

{
titulo:"Tabla de Páginas",
descripcion:"Estructura utilizada para traducir direcciones virtuales en físicas."
},

{
titulo:"TCP/IP",
descripcion:"Conjunto de protocolos utilizado para la comunicación en redes."
},

{
titulo:"Thrashing",
descripcion:"Situación en la que el sistema realiza demasiados intercambios de páginas con el disco, reduciendo el rendimiento."
},

{
titulo:"VirtualBox",
descripcion:"Software de virtualización utilizado para crear y ejecutar máquinas virtuales."
},

{
titulo:"Virtualización",
descripcion:"Tecnología que permite ejecutar múltiples sistemas operativos sobre un mismo hardware físico."
},

{
titulo:"VMware",
descripcion:"Software de virtualización utilizado para ejecutar máquinas virtuales."
},

{
titulo:"Windows",
descripcion:"Sistema operativo desarrollado por Microsoft."
},

{
titulo:"Wi-Fi",
descripcion:"Tecnología de red inalámbrica para conectar dispositivos."
},

{
titulo:"Workflow",
descripcion:"Secuencia organizada de actividades para completar un proceso."
},

{
titulo:"WWW",
descripcion:"World Wide Web, conjunto de páginas y recursos accesibles mediante Internet."
},

{
titulo:"Arquitectura Harvard",
descripcion:"Modelo de arquitectura que utiliza memorias separadas para datos e instrucciones."
},

{
titulo:"BIOS",
descripcion:"Firmware encargado de iniciar el hardware y cargar el sistema operativo."
},

{
titulo:"Boot",
descripcion:"Proceso de inicio de una computadora."
},

{
titulo:"Cliente",
descripcion:"Equipo o programa que solicita servicios a un servidor."
},

{
titulo:"Concurrencia",
descripcion:"Capacidad del sistema para administrar múltiples procesos al mismo tiempo."
},

{
titulo:"Context Switch",
descripcion:"Cambio de contexto entre procesos realizado por el sistema operativo."
},

{
titulo:"Disco Rígido (HDD)",
descripcion:"Dispositivo de almacenamiento magnético de gran capacidad."
},

{
titulo:"Escalabilidad",
descripcion:"Capacidad de un sistema para crecer sin perder rendimiento."
},

{
titulo:"Ethernet",
descripcion:"Tecnología estándar para redes LAN cableadas."
},

{
titulo:"Firmware",
descripcion:"Software integrado permanentemente en un dispositivo electrónico."
},

{
titulo:"Fragmentación",
descripcion:"Desperdicio de memoria o almacenamiento causado por la distribución de los datos."
},

{
titulo:"Host Virtual",
descripcion:"Máquina virtual que funciona sobre un equipo físico."
},

{
titulo:"Internet",
descripcion:"Red mundial que conecta millones de dispositivos."
},

{
titulo:"Latencia",
descripcion:"Tiempo que tarda un dato en viajar desde el origen hasta el destino."
},

{
titulo:"Overhead",
descripcion:"Recursos adicionales consumidos por la administración del sistema."
},

{
titulo:"Puerto",
descripcion:"Número lógico utilizado para identificar servicios de red."
},

{
titulo:"Quantum",
descripcion:"Tiempo máximo que un proceso puede utilizar la CPU en Round Robin."
},

{
titulo:"Recurso",
descripcion:"Elemento físico o lógico administrado por el sistema operativo."
},

{
titulo:"Repositorio",
descripcion:"Lugar donde se almacenan y organizan archivos o proyectos."
},

{
titulo:"Respuesta",
descripcion:"Tiempo que tarda el sistema en comenzar a atender una solicitud."
}

];

const terms=document.getElementById("terms");

function cargarGlosario(lista){

terms.innerHTML="";

lista.forEach(item=>{

terms.innerHTML+=`

<div class="term">

<h3>${item.titulo}</h3>

<p>${item.descripcion}</p>

</div>

`;

});

}

cargarGlosario(glosario);

document.getElementById("search").addEventListener("keyup",(e)=>{

const texto=e.target.value.toLowerCase();

const resultado=glosario.filter(item=>

item.titulo.toLowerCase().includes(texto)

);

cargarGlosario(resultado);

});

