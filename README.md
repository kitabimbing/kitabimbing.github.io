# kitabimbing.github.io
langkah sesi 07:
- buat repo baru pb4_sesi07_web di github.com (new repository)
	> disaat kita membuat repository (pilih yang ini: create a new repository on the command line)***
  > lalu copykan/salinkan kode di terminal git nya 
- buat folder Sesi_07 (terpisah dari folder utama/project yang sudah dibuat)
- registrasi akun netlify > https://www.netlify.com/ > verify (di sesuaikan)
- membuat github pages
	> cek profile / username github > https://github.com/arifswn
	> seperti pada contoh diatas, menggunakan username : arifswn
  > lalu buat repository baru > masukkan nama repository : username.github.io >> atau seperti ini >> arifswn.github.io
  > lalu buat folder di komputer/laptop kita > nama folder > arifswn.github.io
  > pada repository yang sudah dibuat > (pilih yang ini: create a new repository on the command line)***
  > lalu copykan/salinkan kode di terminal git nya 
  
  
yang sudah membuat github pages:
------------------------------------------------
no. | username | url nya
------------------------------------------------
999. | arifswn | https://arifswn.github.io/
1. | vecky | https://kitabimbing.github.io/
2. | Nurpitriana | https://nurpitriana.github.io/
3. | YogaWicaksono-24 | https://yogawicaksono-24.github.io/
4. | M Nabil Amani | https://nabilamani.github.io/
5. | Muhammad ihsan | https://sansan140102.github.io/


https://codeshare.io/pb4_sesi07_web


Perintah Git Push and Update
git add .
git commit -m "update" 
git push




penggunaan aplikasi
1. buku halaman website saya: https://github.com/arifswn
2. di dalam website saya, terdapat beberapa fitur
    - landing page (yaitu tampilan tampak depan yang terdapat informasi tentang biodata, hobi, kemampuan dan lainnya)
    - tedapat menu navbar (home, about, experiences, etc)
    - terdapat heading (slide bar)
    - terdapat section 3 menu
    - terdapat footer 
    - support dengan responsive mobile
3. point tentang fitur aplikasi saya:
    - About > terdapat foto, dan penjelasan biodata saya
    - Experiences >  terdapat foto, pengalaman kerja, pengalaman ber`wirausaha, dll
    - Educationd
    - Skills
    - Interests
    - Award
4. kriteria website: 
    - single pages (section > on scroll)
    - new pages (opsional)
    - comment code (clean and fix)
    - struktur kode, deklarasi variabel dan assign data
    - include asset (internal, external, cdn) ? >> clean and fix
        - internal > download > tarok di local
        - local, load url (cdn), load file
        contoh:
            - bootstrap template (cdn)
            - java scrpt (skill) > external file 
            - java script (heading / slide bar) > internal js
    - content (jangan asal/sample) > sesuai kriteria
    - css ?
        - duplicate penggunaan / redudant data
        contoh: > id digunakan untuk spesial/primary/unix
            div > heading
                > footer
            class="heading"

            style:
            #heading{} > digunakan seluruh/banyak > rekomendasi
            .heading{} > digunakan untuk spesial/primary/unix

            ====================================================

            <a href="">Menuju ke Google</a>
            <p></p>
 
            <a href="" class="bing">Menuju ke Bing</a>   >> di posisi yang ini > spesialkan atau berbeda (tambah lebih besar fontnya : 24px)

            style:
            a{
                color: #ededed;
            }
            a.bing{
                font-size: 24px;
            }

            jika ingin di prioritaskan: !important; contoh: color: #ededed!important;
5. tidak boleh terjadi error/bug (100% fix)
6. di saat pengumpulan final project:
		- judul aplikasi (Portofolio Arif Setiawan - Final Project H8)
    - sesi: Sesi 08 (Final Project)
    - template: quickstart bootstrap (free)
    	reference template: https://bootstrapmade.com/quickstart-bootstrap-startup-website-template/download/
		- screenshoot koding:







