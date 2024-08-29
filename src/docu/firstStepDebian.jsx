
<p>
  Cuando instalas la distribucion de debian 
  hay ciertas cosas que se deben hacer para 
  que el uso de esta nueva distribucion sea mas 
  simple o efectiva.
</p>

<p>
  Por defecto debian no agrega tu usuario como 
  super usuario asi que si queremos hacer la 
  tipica rutina de sudo apt update y sudo apt upgrade 
  ya que en este caso nuestro usuario no es esta en el grupo 
  de root asi que tendremo que usar el comando sudo su para 
  que poder correr comandos como super usuario
</p>

<p>
  Podemos resolver esto de una forma simple agregando nuestro 
  usuario al grupo lo cual se puede hacer de la siguiente manera.
  Primero tenemos que modificar el archivo de super usuario 
  el cual esta en la siguiente ubicacion /etc/sudoers
</p>

<p>
    Si nos movimos al directorio etc, solo tenemos que usar 
    el comando nano sudoers lo cual permite que el editor de terminal 
    nano edite el archivo y podamos agregar debajo del apartado User 
    privilege specification lo siguiente:
</p>

<p>
  miusuario ALL=(ALL:ALL) ALL
</p>

<p>
  Anadir usuario al grupo Sudo
</p>

<p>
  Para esto podemos usar el siguiente comando: 
</p>

<p>
  sudo usermod -aG sudo miusuario
</p>

<p>
  Para comprobar que el usuario forma parte del grupo sudo se puede usar el siguiente comando
</p>

  <p>
    groups miusuario
  </p>

<p>
  Esto mostrara lso grupos a los que pertenece el usuario que especificamos en el comando groups
</p>

<p>
  Tener esta configuracion hara que sea mas comodo instalar programas o realizar 
  modificaciones desde la terminal y conseder permisos con nuestro usuario
</p>

  <p>
    Otro de las cosas que podemos hacer para mejorar el uso del es instalar 
    algunas extensiones para mejorar ciertas funciones del sistema
  </p>
