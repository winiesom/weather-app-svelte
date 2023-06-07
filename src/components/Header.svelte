<header>
    <img src="/images/weather.png" alt="Weather App Logo" />
    <!-- <p>Weather App</p> -->
</header>

<style>
    header {
        background: #e6af1744;
        padding: 10px 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 100px) and (max-width: 640px) {
        header {
            padding: 5px 30px;
        }
    }

    /* p {
       margin-left: 30%;
       font-size: 30px;
       text-transform: uppercase;
       color: rgb(163, 153, 8);
      }

      @media (min-width: 100px) and (max-width: 640px) {
        p {
            font-size: 20px;
            margin-left: 15%;
        }
    } */

    img {
        max-width: 90px;
    }
    @media (min-width: 100px) and (max-width: 640px) {
        img {
            max-width: 50px;
        }
    }
</style>