<template>
    <div class="footer titillium-web-regular">
       <div class="footer__container1">
              <div class="footer__container1__grid">
                <div class="footer__container1_grid_item titillium-web-semibold">Navigate</div>
                <div class="footer__container1_grid_item titillium-web-semibold">Collection</div>
                <div class="footer__container1_grid_item titillium-web-semibold">Categories</div>
                <a v-for="(value, index) in values" class="footer__container1_grid_pages" :key="index">
                    {{ value }}
                </a>
        
                  </div>

           <div class="footer__container1__address">
                <div class= footer__container1__address__title>
                    399 Crowfield Road, 
                </div>
                <div class= footer__container1__address__subtitle>
                    Phoenix, Arizona 85012
                </div>
                <div class= footer__container1__address__email>
                   asff@fdsfsdc.com
                </div>
                <div class= footer__container1__address__contact>
                   +602-926-5809
                </div>
           </div>
       </div>

       <div class="footer__container2">
            <div v-html="copyright" id="footer__container2__copyright"></div>
            <div  class="footer__container2__social">
                <div class="titillium-web-bold">Get social</div>
                <i class="fa fa-twitter" ></i>
                <svg  xmlns="http://www.w3.org/2000/svg" width=20 height=20 fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
</svg>
<i class="fa fa-facebook-square"></i>

<i class="fa fa-instagram"></i>
            </div>
       </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name:"Footer",
    data(){
        return {
            values:["About Us", "New Arrivals", "Tables","Blog", "Featured","Lamps","Contact Us", "Catalog","Chairs","Sitemap","Brands","Sofas"],
            copyright: "Copyright &copy; All Rights Reserved 2025"
  }
    }
})

export default class Footer extends Vue{

}
</script>

<style scoped lang="scss">
.footer{
    background-color: #acaef3;
    width:100vw;
    height:max-content;
    bottom:0;
    margin-top:auto;
}

.footer__container1{
    display:flex;
    justify-content: space-between;
    padding:40px 100px 20px 100px;
    flex-wrap: wrap; 
    gap: 30px; 
}
.footer__container1__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  row-gap:13px;
  column-gap: 80px;
}

.footer__container1_grid_pages{
    width:max-content
}


.footer__container1__address{
    display:flex;
    flex-direction:column;

}
.footer__container1__address__title{
    font-size:20px;
    align-self: end;
    display: flex;
    flex-wrap:wrap;
}

.footer__container1__address__subtitle{
     font-size:20px;
}

.footer__container1__address__email{
    align-self: end;
    color:#1c7eda;
}

.footer__container1__address__contact{
    align-self:end;
}

.footer__container2{
 display:flex;
 justify-content: space-between;
 align-items: center;
 padding:0px 100px 40px 100px;
 font-size: 18px;
 gap:20px;
}
#footer__container2__copyright{
    font-size:14px;
}

.footer__container2__social{
  display: flex;
  justify-content:center;
  align-items: center;
  gap:5px;
  flex-wrap:wrap;
}
.footer__container1_grid_pages{
    cursor:pointer;
}
.fa-twitter{
    color:#b7d5f1;
    font-size: 25px;
}
.bi-pinterest{
    color:#b7d5f1;
  
}
.fa-facebook-square{
    color:#b7d5f1;
    font-size: 25px;
}

.fa-instagram{
    color:#b7d5f1;
    font-size: 25px;
}
@media screen and (max-width: 900px) {
  .footer__container1 {
    flex-direction: column;
  }



  .footer__container1__address__contact,
  .footer__container1__address__email,
  .footer__container1__address__subtitle,
  .footer__container1__address__title{
    align-self: start;
  }

  .footer__container1__address {
    align-items: center;
  }


}

</style>