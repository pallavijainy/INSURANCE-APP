import React from "react";
import { Image, Text, View } from "react-native";

function VehicleCard({ name, number ,expirydate}) {
 
  return (
    <View className="bg-[#fff] w-[80%] rounded-xl">
       <Text className="text-[40px] text-[#666] text-center">{number}</Text>
        <View className="h-[100px] w-full rounded-xl aspect-[3/2] m-auto">
        <Image
          resizeMode="cover"
          source={{
            uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA+gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xABJEAABAwMBBAYFBwkGBgMAAAABAAIDBAURIQYSMUETMlFhcYEHFCKRoUJSU2KxwdEVFiMzRHKCkpQkQ6Lh4vBFVIOTwvEXNFX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QALREAAgIBAgUDAwMFAAAAAAAAAAECAxEEIQUSMUFRExWhFCJSMkJhI3GBwfD/2gAMAwEAAhEDEQA/AO4N6oSpG9UJUAIQhACEIQAhCEAIQhACEJMoBUJMpUAIQhACEiEAqEIQAhCEAIQhACEIQAhCEAIQhACEIQCN6oSpG9UJUAIQhACEJEAq8+WqqdoNoaKxQGSqky/GWxNIyfwHeVxvar0h11x6Rgqpo4fk01G7omn96TVzvIBSUckWzuE9yoabPT1lPGRydIAq2bbHZ2E4ku9LkcQH5Xzu2ots2H1toD3DryetyZHfk5U+hoYWywmhnM1DWF0TOmGXQSjXddjHEcCtVFVE3htlNllkVlI7bJ6QtmI9H3L3QvP3Jn/5L2VH/EHnwppPwXDpri6MNZIyna7XQscXDxy5RnVrXn9a3+GNqOOk7OXwcUr+6R3tvpK2Vd+3v/p5PwTjfSJsu7hcCPGF4+5fPrpY3cXuPfuNH3JiR5HUc7yVbWn7Z+CadnfB9Hs262cfwucXmHD7lKi2ssMvUutL5vwvmMSO+cQvcc7g8Aukx9V2CoYq/klmZ9Tw3a3T/qa2nd4SBSWSsk6j2u/dOV8tRTPJJjnn9nUkHOPFWNJeq+nd+huc8ZHIAKLUOzO5kfS2exelwWi232goJQ0V5J47s8ZIPiDpjwx4roFg9IlPVFsN5jZSSHGJozmInv5t88+Ki0STybpCbjkEjQ5pDmnUEcCnFw6CEIQAhCEAIQhACEIQAhCEAjeqEqRvVCVACEJCgFWU232xptm4DFGWy1zx7EXze8p/bPaJmz9v6VsRmnf1Iw4A47dVwGtq57jM+sq371RMTJITnQnl4DP36lS5XjPYjzLoT2/lfa64kzTPkOd6R50awd/+/goN9ttPS3b1Gle6RsQ/SOdj2iOOPMge9aLZ6/09nt7oBTNyMvfI5+A49vuWT/LlBJVyzyvILzkka51J7e9ThXKx7EZS5TYbE2hj5paqRgc2Ju60OGRvn8B9qnbWyU8dvkZCAyaldHUktYMABwz54KydFtDBTTCajuE0biMFvR5afEZwrKSq/KUdVLLIXRy0b2Oe8bu8/j9wV/oWUzjN4K1ZGacSfZq2ldcqmgqImOlkl6SEujGrS0HGe3CvXUdK7rUlMfGJv4Lmr6qWMW+vgOJREN1+MnebkH4YC0EG2wbTMNVS78gGHljgA49w5LPdHkm0Tg8xRpXWq3P69to3eMDfwWd2kistLC+ngttK2d3F8bA3c93NZasudTPUyyx1tSxr3lwb0ztMlNsnO6ell33E6EnP2qsmMzQiM6agpIQ3pG7++G51LdcJC8l7i4pQ8AaoDp1mpqGbZ6OnhaZKaWIteSzdc7OQ7PesFPQupK2e31GDJGdHHTe7D5/74LYbByuks7wODJiB7gq/byn3KyjqImHpHNLTjuPPyKAn7L1EF3trqC4xsmkpgOu3Ut5EHkRw07u1JX2OWizPQb80Hyozq9o+8LO2yubQ3aGrjfpnEgB5HQ/j5LpbXBw3m6t7VJ7bnEU2y21FZY3DoQ6qoXavoydWHtjJ4fu8D3c+s2m6Ut4o46ygmEsL+7BaewjkR2FcoulnE73VVC0Nn4vYDgSfgVGsV1rLXWGst2k+d2emf7LZ8cj2P706nUztyFiK70j2ilpaaoayWXpSWviaPbhcOLXN4gqRZ/SFZLrVxUrXyQSSnDOmbuhx5Ad6mqbOXmxsc9SOcZNeheW8EqqJioQhACEIQAhCEAjeqEqRvVCVAIVk9sdsI7BUNoooXSVb4emyeo1ucDzJzp3LWFcd9LNXGdroKdrvbbRxmU9ntyED4/YtWioV98YPoUamx11OSKK/XC5Xud800gfkbxa1zRut7dTk47lVNoanGWNB78fep00UMkTelY1xZq3OuCqpss9NMXU8rm68AdPcvqXoIvO23Y8OnXSkt+o/NT13QyRxRQiQsO6/GoJ7eOVkqnZm7NcXmCN5JJPRvAx5HC2D7nVSNj6SR4w/P6BrRvY+S7PI+KsDXUdSB1onHiHDQHxWCfDITbSWDctbyrqc3/I9zjyTSkED5w/FKyvuFEBTvy3BzuHJHwW/npw8ExuDh2gqB+Z1VX1L5oJ4AccZMgjuGiz28LcMblsNbF9SnhllfRMikLS2M7zWkcM/74KNvA6Alue0K4k2bqaZpbUkb2dA05ymYY4YDuVDFuWhjPeSMz1OG+VkAQS4LmxdIBzY7Pw4ohYJHuYHbj+Qdp9quQ2myHxOwlO5Lo8Nf3kfepez09UQWul3Kp9HUNPtREeKBSzEY6M69jVdw0pxiCV7Pqn2gV7koJw3edTl31oVCXC6l1icWvecZKiGK5RDEL5YsnOGPLfsKekpbhUyb0/SSciXyZJHiU8KaT+7cXH5pGHDySbs7eblH2mt9Ik/rX5HIrZM7G8KhpAxpJHgfBWUNrrf2eeeMjgTUgfYqsSVDeBKcbVVTeG8oPhK/EmtcaikivzWgG4RuHY5jSftUg2Suq5xPJcadkmMF3RAZ7yBnPvWUZcqxvDPvUiO9VjO1Vy4V4RJa1d2aW4bDi5zR1M12HTjG+Y4uj38dvW96lW3ZyjsVxpbi2hnkdTP32lswc3OMa8+azcW0tSzi0lTYNsJWn2mOUfbrYrGMol9ZB9zpNPtvQPOJ45I/DVXlBeaCvH9mqWvd806H3Fcemv9vrR/aYS1/wBIwaj8VV1NbJRzNkpp8g6xysyP/SrfC+ZYWUyf1qXU+hAcoysTsjtxBdaeOCs9iraAHD53eO1bOORsjQ5jgWnUEc15V1FlM+SawbK7I2LMWOIQhVFgIQhAI3qhKUjeqEqA8lfM3pHvDJNtrrNK0uPrHQtaPmsAbn4L6aK+ZdrrbPJ6S71DRANlEznscdQwEBxdqtGnudMnOPUrsgp7PoM0teHUo3n5049oUQ1wEp44TNz/ALLV5Y0R9I0P3G8Gu4OA7t4HHcQoraiklwJ43xvxq6M6e4r6eGv5q4s8l6SMZsu6eqY8YDgFJa5p4jCz8VK6WMPpZ2PPzC7Dl66erpjiRrsdhV8Nd5KZ6TPRmha5oOWktPcVNhvVTStO7KCPrNysxFcmZ9tp8k3VXRrWktbkAczxVlmqq5G5IrjpJuWDSzbQmaUOkpwWHsdqUxdmQT0/TQ6sIz3hYqkbd65z6mljnkazrOY3LWq4ttZJPA5u6SDo7GuHf5rztNxSibcZbGizhsoSU4bs801udX1XRRVjqZ+Rk4y3HbhaaXYW/wBFDVTNudHUGnLv0TRh8jQAct7eKyjaiWkqmzRndc08HN49xW6sG10FXLCK+PpHxs3GPGOkjGc8+t45B5ajRYtVXepc2nl/jJvqlWvttWxnKW6y00wgnhY6QYIAY7Jz4E/YtFR32FhLZoNxzdHBsoyP5sK3sdFS0m1NPdW1kU1LEHDoXt6OUZ1HW9k6juULaG9TUHpB/OAWuRlvL2Ruc+MFjm7u65znDIAyQc9yxvXauO02Ho9LPeKJLau3VWDJTSnPB+6Me8IlobfUNBgqIo3ngHuI3vLC11wsVnq6erqbnZGUhYzf9at8nRndxku3gQHYx3rhUm0t7juEkNHUyTQ5L2Ryxtc4DlkkZyNOfFSjxO+O5VLhdL8m5kt8cbiDLBnsDwkFDER+ui/mCxMu1ct0aaa7W2hn3B7LgHxvB56h2nkqqeWiaSfUZGfu1Tj9oWn3m3uir2iHaR00UMH00Hv/ANS9epU/Oopsf7+suUes0Y/ZJf6r/SkNVQ/8lN/Vf6VH3mz8fk6uFRX7vg6uaKl4Gppvf/qXh9DR41qqYeY/FZpmy9I+e2U0262a4kNpgx7nAnTiQ0Y0cCs1cRRUFbJTuoRIWYw4VTyCCAQeHYQnvFvg77XD8joMlHR8W1tMO7eH4qDVtpYGE+uQkDXDXZ+Cwoq6A/8ADYwfrTSH/wAgrSimpYoS8U1ND0h3AWtc52OZ9px0C771cuyOrhkF+4s4brPUVYp7DSTVNZ8hzBwPaPcfcuwejnaZz6W2UVwnEj6unDo5d0tBeBq3XtHxB7VhW1ln2UvNjqNn301yMNHu1EzZCN6d2hkOhOAM4byGAos076C2U0cdS19ZGWvbJF1YsOLm4zwOvkskrL9daubf/RrUK9NW8H0SD3JVTbJXht9sNJcARvvbiQDk8aO+KuAsMouMnF9jRF5WRUIQuHRG9UJUjeqEqAQrgu0zC70gbUVEDxlkcYOnEEAOH+Fd6dwXC9taFtu21v1C6Fs8F2pY6jfc4tdAMvyQe4sPvwuxwcMJtXTS09ewT4BkYZGtHyWk4HwGfNQ6BtNUnoKobjxwlbx8xwKtdpnUlwvzGWlsmGQ4kEmCN7A6p5jG6o0Vkm6cF8jYhyc7gfNero6p2VZSMmoshCW7Itba56Mh5AdHnSVnDz7EwKmpYA0vc9vY7ULTNp6qkbo0TMx1ozn4KDUUcM+XRERv5jkrZQnW8FULYWLKKN9Q5+pZGM9uft4qHVFxbg8SdFcS0jo3YePA8ioNVGGyxF3VyScKi+cvTaL4JcyLay2+vlpxNSVRpIoHbschkLQ9/Egdvmo9dNLSXEzQM9VdKCZYWjHRyjRwx8VonNqYbXbLU+BrInQNqA8cXPfq4HvBOPDCotog6SsfO5jmxyyuax7hgOI00Pdp7l5sMcy5jVmSX2vDIT5N9xc4lxJzkqVYC0XRjXHAcdFUdIe1SKRz2P8AWGuI6MjdwMku5AL3o3qMlLwedOpyjKPk6maKdjMx5xjgFXVbD7bZ6cODusASN7xHA+YRHHtrDDGRFQzNc0OA9agDx4hz2kHyTdS/aloJq9mqhzD8uKMvB82bw+KvXENNY8WYweXHQayl5g/kqqmOhc0xu3428N3UDw9nQDyUOkt7KeZz7dNGXvG6WFokz3YJDvcnKyuc/Ints8Lm8d9pGPeAqeaWKTJjz4YVV2m0NizB/J6NNmpj+tDl2tRmqulkZFC49cDeZvd+HcPeoLrLUyOPq8rJG8hvh32ZUyku9VROGHb8fOKZu+wjswfuVrLPsnd2NkqaWqtlSB7YpCHxu8Gu4Ly7NJv/AE3k1q6S/Uigbs3cz/dw+f8A6S/mzdBr0dOe7eGqtDb9kv8A9K6f0sa8+obIj9vun9PGFV9Jb4J+vD/kaa13SopI6MyUhLoGuI32sc6Jxj3MsdvYHDOvLsOqyVys09VXSTmoooWkNDWyTMJwGgDPuT/qmyA19Zu7v+nCPuSiPZNvB96d3b0I/wDFc+lt8D14lb+Qhn2rtQfwzMz8CrGhpaakfEW1UMsrWlg06TeJJxprrrgJ0S7JN/YbnJ+9VNb9gU+3bRWezvM9lsgFVj2JqiUzFngOSnHR2N74x/cjK9Y2TyOVdEbWxslcegc9uWtPXd4N5eKgNmdUkBjdyMHQAYTBjud7uUlVMJZ6mZ28d1pe4+DRrgDljRXP5EfQ0/S3aspqBpBDY5JgZHfwtOP8Wfqr1tPfp9IsPr/BksqtuN96GboIKqsssj8b7fWYWk66YDx8Wn3rrAXHPQ9S0p2prZKed0rqakw9vQ7oBe4YO8dScNI4DiuxrxtXbC65zgsJm6mEoQUZPIqEIWctEb1QlSN6oSoAXNPSNbN6/vr97Dn2h0bBjO86OTex57+PNdLWT9I1nudzs8c1ifi40sm/G0HBe06EZ7eBHeAgPnO7z+obQSmNmkbiC3hlp1b/AIS1Pw7TtacHpIxzyMj4apbrsntdNWzT1Vkr3SyO3nvcwEuPkVFpNkL5JVRsq7bUwwlw6R7mcG8/NXVaiyraDwiqymFn6kaySluMEEVVUW2oZBM0SMmbG4BwOoOijOqYKgZdhxHzwMjzGv2rqkO200EDKeO0sbDG0MazJADQMAKqul2s10BNdsvTPkOnSMl6N48HBuQt8OKS6TWTJLh8OsXg566KN7SGZOeWd4fcfgs5eYtwPGDkNIIA4aLd3C022QufbmVlITwjkmEzR/hafiVm75Z6oQSzvc14Yw5LTxHml+o09tbUNmSpqtrl9zyjWXiKt6ewCn9Vq6Gpw1k8GSYZdPYdny108BjXMbfyzudHB6qYKSlcY4gG6ZDiD7XM6Z5KdaYnQ26lr8/p6mo/RuLjhkbeLtMcSePYq7bi8XesnmoLjWesU0E7nQAtAA1I5cSvKRuMljeaHa69q1ex8IgrPXXx78NrpJbhK3HFzRhgP8RHwWZEThE0nmM8VY2S+1VrqHuhnfC6Rm49waHte35r2HRw+PivSlXJ14M6l9xe2i3CqtdRcq6pqhVSxuqDUNmLRk5ydHciMEEe4LOwXe5se10NfUseG5y95cc/xZT9VUyVD3tpTSxRPO86OB742F2uSGE4GdNOGihiCpD3SOhcQ7ABaRyWN0WLsXKcS3h2u2njz0lz9YHzZ27w9w0Xp21dxmbivtlsq/GENA92FSuEretDK0dpaU2XyO0ibk95woqueeg54+S2qLhS1VO50lnhpJBwfBMWj+UggqlFdCNHwE94wnG0VxmO/wBFvtb34Hmm56OrkcPYjZjscFcoXw7MhmuXcQVtN9BJ/MgV0PKmf5u/yTYt1QflxDxlCBbZ+csP/dXee/wMQHPX4v8Alj/N/kj19vyaX3uSNtjvlVUI/iJS/kwHjWRfyuP3LnPcdxAPygeVK3zKfoq4ySbhjbHkaEcU021M51bcfVjcVJgtNO06z1BP1YcfaV1eq/3fKOPkXYt6a4V4pRSx1krIeBbGdwuPaSNcqvrKVhu1AC3e35QZHZ1cM5OSeOgTsVFUMz0FQXjnvNxhWNv2WuNxm36Skmq3s572jc9vNSWjm3mTSOequyOu+h9kdRPfLoAxklXLHiIHecyNrcNDiNM8T5rpIXPfRHs5dbFT18t0EbBUuYY4mgjdwDnTzXQ1ltjGM2ovKLIttbghCFAkI3qhKkb1QlQAkKVCATGmE3JTQyjEkbHeITqEBVVNgoKjrRbv7qp6zY9h/wDrvB/eWtQgOY12zs1O4h8bsduNFQ3O0Olo6iIN9pzHADvxou1OY14w8Bw7wq6tslJUtOGbjjzagPnGlNSLLDNLI59PDiIRux+jaSDp3YA9xVdtZMX1EeTkvYJD3kjX4gnzW32xgr9h7tUPjEjaSpc51NM0NLDvEl0bw4Y0cXEY1GezK5dX1pqamSaaXpJH9ZxPlw5ADAA4ADA0CAGVUsYDRukA8HDkn4Z5JnbrKaJ7jy3Mqu6VmRl3HmthsZQFrpK6paRlu7CCOPaVYrZroyLivBUR01XIQGW0Hs/ROCsqewVb4N9/qsMvJpaSMeIK15aHcG6dm6k6In5LvcpevZ5OciMjJY7rGB6vNSOOdeu3HxRHZ7+dTPTj/qOK1ohOeqfcl6BxOd1c9e38jvKjKSbOXmqx6xc4d0cBrgL0zYqrf1rpTj+By1bYH8mr0IpOwqEpyk8yYUUuiM9DsCX/AKy8tH7sR/FWVL6NbdJj1i/1TD9SmaR8XKzEc3LeXsMquReoksBTeinZ+T9ZtNW/9hjfxWK9JWyY2Srab1GtlrKCoZ7EzsZa8cWnAx3rcCKsxo94KYuFpqLpSvpapzpIXkHddrg9o70GEce6ZoAO+9x+an4pHBoLicnmSt4PRj0j8xVEzO4tBU2n9Ecs5AdXTgdzAEBz2GSaV7YomF73uDWMaCS9x0AHaeC+o9gNnnbN7L0VDLu+tY6SpI+kdqR5cPJZ3YD0cW/ZusFfLA6pq256Oonfno8/NbwB7+K6PujOUAAa5SoQgBCEIBG9UJUjeqEqAEIQgBCEIAQhCAEIQgGqingqYXQ1MMcsTusyRoc0+IKpzsds0X735Ct2e6naPuV6hAUg2R2eBy2z0TT9WFoXs7M2jGBRRgdwVwhAUp2YtXKnAXk7L2w/3KvEICi/Na2/RI/Na2/Rq9QgKMbL236MpfzXtv0RV2jCApfzZt30RTjNnre3hD71bIQFa2yUDeELU822UbeEDfcpiEAy2kp29WJg8k41jWjDWgeS9IQAhCEAIQhACEIQHlhy3JSoQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgP/9k=",
          }}
          className="w-full h-full rounded-xl"
        />
    </View>
    <View className="p-2">
    <Text className="text-[18px] font-bold text-[#333] text-center">{name}</Text>
    <Text className="text-[18px] font-bold text-[#333] text-center">Insurance valid upto:{expirydate}</Text>
   </View>
  </View>
  );
}

export default VehicleCard;