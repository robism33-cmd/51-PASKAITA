// ===== 1) Receptų duomenys (bazė: 1 porcija) =====
const vistienaSuSalotomis = {
    id: 1,
    imag:  "src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5wMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EADwQAAIBAwMCBQIEBAQFBQEAAAECAwAEEQUSITFBBhMiUWFxgRQykaEjQlLwFRYzwQdDsdHhJFRicoJT/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQBAgUABv/EACcRAAICAQQCAwACAwEAAAAAAAECAAMRBBIhMRNBBSJRYYEUIzIV/9oADAMBAAIRAxEAPwAzEJHf18CiNukSkZxVNplEfSoUlMjYjPq7V1ZJMlwAIcntFuI/S2D8Us31o1tcbS2e+c1dvdWk06Lk5J6CgE+rS3cu9l4JxSevNbd9xUkeo4aVNaWumuW/1SDmtbXIjLuPzCgFgWmdUz1prlUJAEx0Fed+Q12EVMdQ2l0pubuBroryHzszkCqbRtPxEvHxRJwk0mxhxVqziRFYDAAo3x+sLkZ9Qt1LaVwM5lK10OWWHcfaqNxpjhirLg012l8kPp6jpWl9ElwQ6nGe1ena1Cmc4xArq7d+BEmXSST+UVag0GB1GV5+aZSkSjoMgULnuBHL6fesf/0ldyqx97b1UExq0uNLayEYUbcYxQq78guyNECM+1ENOuUlthzg496HaioVy2cUguqt3HE5Mdn3Kk+k2EyZEShj9qpN4eik9KpV5Z1bpVm1uBHKGY8U1R8q6nD9QhRsfUxbn8JRyHJjOa0XwsYvy7v1p1N7G3YGsjnjf2zWxTrqHOCcRW0W4ieNEnQel2/WtWsL9D6XOPmnfEeOcc1rthPYU5mrON0Xy2OREcrqadMmjWi2N3ctvuRj4FGZhAhGQMUQs2TyvRgUrbaN2xDzBmziL2ttHYR5BIIFLH+YcE9ab9Qtobu4ZZnwT0FUp/C8Eg4j+4ogrZRyYSt16MXh4iUdSc/Wtv8AMa4/P+9W7rwhEc7VI+9B7rwhMufKZhUFHxkQ+az7lpvEMf8AXUEmuQN1egN54f1GDOBuoLeRXdvkTQuuPihnf7EuFrPuO6alFLypyK8pW0S5U+lz2rKp5P2OpoUZczozW7J+YcV6ES3ga5EeStXi4k6mmC302BtK9ceSwqNJebc7ZiWvleJzg2d7rMnnOvlwg9a3ltIbZRGmDjqcd6bPFksWk6CkcK7WJ4xXPo7/AHE7yTSmuCoQOz7gEy0avDdukt4D2QZo9fEDJoV4P/iWklzjG44H0q/euu0vJ6kHUCvJ6sG/Uite5vfHJsTJkGkJHJNLNP8A6SDliOBWkl3F50ot1JTBII9qPIU/ymxkgWHzgdg7tnoaU76z/wAOWHz3KGUEjb2Felo0aUVANz+mUuQahyT36mupajFptnHdKTJ5nRT71mn68L6HhWRgOfisAtZYQsqh1HQUMlhWzEv4diiyjkURvG564lk061qSTzCEms4uUtynB/M9R6pCZiEgl25Gd1BLaKX8R5jy+n2q9Gha4Em5ivZe1ctapkIuJxJJGTNreG8tn9N65HtmiM185iCuxJ9zQ6+uAihc7SelVZpZHeMbsgfmof8AjjMLvVuMS1bamEkcu3pBxRYXcTRh99Lkiny2MULSbeTt7VRfxNZ2x8uWBsjrQX+MNvKnEneAOBHNL+JRw2TXg1JVbIBP0pMXxhYhgPIYA96JWvjHSHAV3VD8iuX4tx2cwLu56EYm1aZ29KNirS3suBhWoRb63p8+DFcRfqKOWt9alOZEJx7irt8YXO45gfPYoxiQSTtJy+RitR4iis0YOCSvH1qvqXiLS7ZvLd03DtSXqniCG4nZLVTyepHFFrqOn+ytk/zE7G39COEt9/icgnXdHjp2o3pGoO8RWRskcUn2+opNp8CiPymUcn3q/otwhnBaTgH3pfUXW6g+Ld3O06FXyY7RNvUGtmjQ9QP0oe+pQxNGqYIY81eSRXAII5r0mgKpUKg2SIG5tzkiRtZQP1T9qo3Wg21xn0D7iiwr3OKdxBAkRRn8G2rNlYl+wrKcOtZQjVWexDrq7VGAYj6hLJZSgurBM8HFN1vq6jSFkI529CKFXu14x6RIfntVe5nbTgkkiGVcZwBnFYOj1GlTJVxgyt1Vo+u2DvHb3moWduVtphz0CGgXhrwfqmtXH8SN7W1zhpZFwfsK6JYaxLqAjhhtleVj0PRB7miesXh0y1jhgws8v82OnvTL0VWt5M5laEZjjEVvE7t4f0yKy0uIjna0z4yaXtNbUpLm3hlkka2kcGUryQveny+sbMxRSandANsJWNv5vmlma+htRKtr6Q6lTg9qC1KpbuAm7Q4Fe2GDqlgSQkjSQxnEaseBilzxDqC6hIOpEZ9Kih00xI2phRmrmm6Le6ltaCH+GzFfNbgZxnj3ox3Pw0DhU5EDWt/cG5eLy9qj5qxKslwwPq49qOwWWmWtqlyJBc3KyYaGRSqkd/mtbu80m0hSUW7SPtJcZwM9gKEz1pxkS6I784MAOUtmy7Afet1vo0GVcUDurzzJs28e5JjtcSH8nPGKvRWlquEJYSYyef8ApSTuf2NVUcciB9e1mQXqBTlF61N/mD8VLbWViu+5ndY1HbJOKJXfhtdXiIjATaMBxxz81D4D8LW1h4it9S1ad5Ftz5lvCsf+o3QZ+Bnt3pigowyTAWVOhyBGrWbc2VqNPs2VCAPOboWbvzS1bJFBdNHcWscr5wTjOaZ/EN5DfXs6x+m5zgxkcj4oE1uYZMTqVfqc9KQZnVyqn3NOm6pqxiQ6l4TsdVh8yxK2s3x+U/akHVdJvdJuDDeRAY/K4GVYV1LTpUaVYUVm+nevNegtS0tlqLqZFwTFxuWnKLrU4fmKWlSfpORRo8rhYVcv/Sikn9qsWn4v8UsW+dXH8pYiuhaPqekaRMy2cUAVh/EkdcMT7Cqur6bbavcG/wBNuIxcMfUC2AaM2qAbBHB9yhqsZCccwc+iTR/h2d90zjJQ8496P6R4XS4cPPIFAHO3qTUegWUhjeeaXzHU7Mg5xjtTFaRtHLwSFoL2oWwBMvwkdxb1+0fS7+KGOYvC6ZAPbFUobx4s7SQc8UY8bOpltiCC2MUtQQztKd35R0pZ1U8nudtIPEYrHUpDh5CTj5o3a63O7qqZx3pOiZllEf7Uw6cDCh38ZoCWPU+VMqtWY2ya4kMKs+Mgc4r2HXopkynNLblZeGrIlEIOwnB60zqPlb9mEjFGlU2faMya0PMwwwKyld5zmspSv5bUquCczTOgpPOIS/GEHG6rVkZ9RmW3hj8xmOOegHzQXSxHf3EcQnSMserdMU12VymkwPFCiMA/+qD1oGk+LWw77DhYOyxj9axkwhcS2vhiyfyyJLtxydvA/wDFL0+ri7s2ury43Tk7VXpgCh3irUJtUfIm2KBwmOKVRbX/AHkVl9hW8LVT6V/8iVTROE3MOYV1zV59TvUmd8Mq7RjjAqDziQBnJqmLW6//AJM30GadvBOiPFayaveRxrKOLVJuMe7kf9KmsBcuTB3EgbcShLps+jWEeoX9sTKcOkEiEjHfeB09/iodT1vU4dEjW39UswEt28ILtEGOSiAH0Kq9z+bFMT6nMY5obhvPEnBL8jHSlfVtMtQfJ/DXBCLl5UPqkXA2gfGePtV11VLqShzB7CCAwipd65cXkUHlEoG3EL3xn371bsEklsyLk71OcHdyarX1lHdaiJLS1aJAoDrkgD7+/wADipLv8Td3EFrEhDIMDA7e5+KStXccgRqm8gESnNHLJL5UCO7kgKiLksaYrLQbqyljk1RlaJBmRIWyAAMkb+n94olDpdtpu2A7ppGQvJc9AwyMKB2xz+1XbWRdRW9SdXl0e1TaIQNrTsoDDOfkD4xxRUqXdsaWN9mNw6le/wBQmtNJiaysiYZy2GC8MnGBx1P+31qpfapcpdLttiqpEu0MvIBHx0z1qO6uWbRjb2u61QDhCNwTnPFCF1BDNwrgNkMTxuoDZfAWXrIQln5hwan/ABo3mRVdv5sDAP1qHV5JHVJLeAzYyJG7ID0JPagt2lxfSfh4XXyVYOWTlhj/AHq7fz+l7SGO6itY9uJC2fMYAZJ++Rio2KvRyZB3NwoxmWLXUU06ELaxie6fA3553HsB2FKzie6v3u1mRGmyWabo+e3yf+xq9FbPJGJo1BOT+f8Anq4kFnJcxt5c0Q6yK+DGx/8AjUK205MLULBXtIGf2L13aR2usG0trpZNqhvP24RmPtVtNGnR1Z5CCfy4OM0ZurS2UyvEsY3Iy8rkDI/2qO0uLeMqbmXeYwAcd6l7WsG5OJdSU+rdwnp0sNnZRwh13d/rVq3vYlmeJZS8jL6SB6QaqTy6XNGCEO88hs4qzZzwIm3alLFjnBiraZmJbMFzRfjZTFdkJOh45qK6X8IjR7SGHar+qzRXCNHEi+rqyjn9aiEbzWkkflmWV8YLHp96hlyeZRtGwXcIIjjkeWM8bu/xTAsscabWbe5HalYees7q6kbTjB7UQsbl1f1YFRapxxFlofPUYRGxUFakUOByMiqsN8uMbh9KuRXKsM9qRNjjsRoVYkMqfBryrgmTtj717Qi/8QwZsRWvLSa3cvAftRmx1cf4RAHOHx6h81YvLbYhY4IPelnUN1vkoMJ7V6I1/Q7e4D460C0B+jLd9qcSRl2P2rNJTUdUz/hsDSDjc/RV9uTS283nv5e0uzcKo7k8V3fR9OgGnf4dCgjt0hSEjpuI5YZHPuDVaNGH/wCpp/IarwgAe4t6V4duoXSS8laWbG9IomBXPyfars9w08IkeX+K3Y8447VLruqpDbmO15YZjViOEXPRffNKd5rU09xDbxSA9F2jonHWiXaekr4xzMlGdzveGULea80hxGGG1NuDx2+ap63q4eSSeUsgICnOecf+apXM8cSkSSvv7tnpQWe4kuZ2ihvgQFLMGTgqOvJ4qaNOtS7VHMlmDHMsXF5ayQ/iUvYCw/NEud3bgdj1onb29rpPh2bW/NDF4QwVl27mPRM/U4P0Nbw+HtP0/Tf8T1RCjS7HhjJDSdePTnrgnqfrUUlxBrchtFF4tpEdu2UoVOOnTr9qOdtYLMMwDb3ACnHPMsaZqSajFkqIsjON24YPz/tV17kwI8Yt0aJUHl4bGSepOB9etU7e2jsY9tuCwzkkjmo7iaWRScqB23UrXW4bceoybVIwJHevF5bO6lVPUoM4+1LX+H/4lesluhYgZLg4AGOuff4+avzuTMoI6nAWN8789sUXt9NhghEGMEjL9OTj/oMkfqa6y3HUvWnsxfm1L8PYRWtlHLCUJ3LsAHIxkt1JPzVS8ed7ON5plmVyMxAncD89/vTRJ5Now3RM4Y4O0ZIredYvJyiru7BhQDZzkiPqwAwoiKLi/PEccoXaF2IpAYDj7/Wr9mt44VpYnhQIwLM3JyD801Rsnkqsiqpx6lHOP/FAdavEnnFvBgR59RzwanzFuAJfyY4gjWNRMVuLe3Zg75JJOePf+/atLPzpY44tqpz6nx29zUN3G+oaxb2VkqvMxEa9gT3yfYe9O0/hwaPYeQkpuJWIMki8Akew9uTx96YbC1gROt82GLWnwAXESZE+458vjkfPPFWJ7yUTs/4by4mO0L12kcHFemxu3zJYmEg9V27WBB9/bp7d+wGfYNQaHdDewvIwJDMCOWHGR0B+vtQ3X65xGBkt3JLTUoxvWcbefSyjI+aLWN5A5Gxw2f76UP1C3/E26T2Qt+SSwm9I/bvU0VjDZQxTywu0uB6Y/c+/tXCwBYNkBJ/ZrejFxIjj156461Sl3sPLSJtynO//AGo8ojlKzyxRrhsLl8kj5Hah+p3DwzkTQeWG5U9iPrQDiGVuhiDh56SBZUbaf5u1XrdniYIjmRT3PFDbtxJtljY5HbPFeRC4lbZAGLE8Y6mpKIwwRKhWZyCOIdNwRgLnP9IHNZUflyDTRJOpguU4643c96yg/wCKh6k+AQ3cyZyF/L7mlzVra7u0dbC2muGTkiGMvj646felp/Fer38qW1qwDt6QsSepv3rq8GpC0s2tYokQKxUkDOPatsKq9zyYsbqIXg3QNVj8RR3Or2E9vbWuZmZ1BDMPyjr7nP2rr/8AilvLbM6tGWjUlNjYBOTzkf2aUptYjKMsm0gjmgB1KOD+HDIRCSTt64z1+1DsJQ/WOi83EeQ9Qhe3yncGfgHFLV9eGxnSS2izJKSWb2Heo9Q1GHHR3CtnIHWhq3L3m5tgSPOArnkj4qEbC9RsLvbAlua9lu3yfMOeNqmi2nRpFGyrFDHcnaY5Zsv5QOCOmMcHOfvQqxk8ty4X+Io7dqkutQZMK8W6WTAznao+p/vFL+V93HcaspWuvLdSZruS31VrTzZppGl2gN6tpz1yev0prQSDeBgvnLNjAoF4e0uFmi1PDCT1BVz6fbI/fH1pi9SgE8j5poL7mUrMBtzxI58Rw7nDkdyO32oVJqAEjLMQUQ4Oav3FyuSEbLfsKW2gnk1yJImLhnViV/kXvmgWPngRmpccwgrpaX7TxwtLN/IeSq8dRjvUs19qXqb8O2Sey8/vWsUjIW8mMqsTctgnfnOMmiUtyJIlA43CkGbnmalbBV6gRWuIlbzJsOzbQGYbi3tU4tLogG4lZD7A81YChJsuAdxG0fNTkpGu6V88dfimEp3DLQT63YdqiDjI0Vv5Sfwy3Jyd360tw+deambOxxLI+drHgHAyfr0NENbu1jt//TnL5Oc9CKO/8MbOHT9Mm8Q6nDGksjMLOWRsHAA3ED55GaaSnIyB1FLL2/eTPfCljZaFFcb50vNSuMbyUIRFB6KT1Oev0FWdQv7hbpQyB0bhizbT+tSG70ueSOZII4zKxYFOCCO9WNQkt3iAkhadMcxqBzj/AL1nWWmywbxDitkrII5i/aX8RupYoPSzetjk+lu45Px1+arKvkXfkRsGWQlvLcbsfb9f1qCa1L3kV9pSPAd+djnMikD9xjFWoktonlv32NPjbuB/vGc00WVTwZFQfZ9prYyCLVIrKRoxCmZMKuAG6jNMLW8pkVT5iJtJLL1z2INCtNmaEsy3MLSTH1KsoGSfeiEWsiCaO3nhKMw4wBzz1GDQ2Bf11DK6jppBLps80bFLqUBW9Sup6/B71Umtp5Fj/FSySBDgIecfTNEtVlkvQBa3gi2nlFfkkd89aC3FvqpTYtwODuyDuOfvQyAOziFViejK93prB0IdY9/TJ4z7fFVi0lq/lTKUde2atIuo5VLxWdcgZTGevYHv+1V9Uijkt5Gid/OjBba4wSByR3BOD2PairWSODmEW/DbXm02ovcHE8zuue7c1lAbTdcMcMB9ayjCvEu2rpQ4zHy3TS9BtvJt7URFRgvkGSQdfU2M/wB8V7ZiSaO7vmmiEFyu2OKJt2z6nt9KUnvPxQeOaQBlB9RPB9qLeHIJYNNln3q0EjnaF7kcf96raz7SxM8KoO7mCNavZLZ8MWIJwCo/aorSK/mZfNikghb+eXjA+nWikxYv5qZSQHOaZNN0WC8ty9xJI9weTz+n1olNgdee5oVh2GFEW59KijMQEpbzGCqX4H1+BR2/0TSbWLyI7qOSVRtM5ygxgZA5x79R+lVrizaCXDBhsOVb2qtPbC+ZFmXCfzHvVQ/OJp06Oyv7ZmWDaRbB1aWIhSf4m8Esf+1WVk0+4C7mgeNj6elRf5NspwzQyK5AySGxj5qjbeDkE2JJ2aMnI2d/vUeJM7s8wpZrPq0coWhjiCx4wOgHSq95cbF9t3HSqKWSaW6LCX8sj1BnJOe1Bb/VWvLh4YA6xjcvmnGR7YH1xRi+4dxF08Zlm91ARt+Ht8NK/wCVfmrFq40+KcXL/wAW4i2l2OMdaH6NYxQS+ZIzMx6sVJz96i18aleSMlpbsI1yqjHBFKt922jqU84QZEMWc8cbPJPexSQkLtXIyCM9TUd5rEOXWxAlmAwoPA+2e9IK6XqltcrI9s3B7LVa6j1Avu8qVSvIwMGmU0yA8GUfV2PxGmHxBPBI7XVrL+JGQsbKRge/PvVG88Q6hJ+WIAZyc96p6VqeomVbe8Rpoj0VwPSfg1fkuI+u1QvsetWOUO3EqLG7Mq20N7rM4tyTunYIiqOhJ6n4Ga7R4q0fT9OsPw7bsxWZigOAFj6Zx9cd/alj/hL+DOuXN2VGIIN2fYmi3jnWEurWWbbIA7lVXqdoI5o9bKEJbiFp3PYCIiFSrhlJG3pg9KNQXzDb+JbquBn2obHbSOqMoOG/WiSWK2trJJflZjkFFz+UVkis2f1NvUalV/uENPEPm+bHjOMbj9KGarOmxktYdwjYPKsY5brj+/ivbTVbY7kCMqxjLHHAGKTLLXpbPW5JFJlhf089SOcH+/ejU1Fwf4iNlwXH8zoNjKv4NGFuqsAAqyJyOc8+9Y2mNPOzTDfCRlFbjae/NU11GF7ZFmmIU4YHGPV71tfXUht3VJJGV1/1EONvzmrYduDxKq6DkTS50qSaeYx/wwAOBj1cdqy3jaxPlb5Mk5Ysmc/Ga8tJJ4bdY4Zdo7gty1SXjrJZSRGfnYS3OSPagWUk8GFWxQciWIZlkyzAgKeHJ71SmWB4WhtyGBbcwzyMn3qrdXDR6G34c4LJkDOOD3FAbDULm1O0BtmDjJ4yeozR66gi/WcHNjYbqbzaNNFdM0bqq9VHXHxWUQ8+SQ72ABYBvT0Oe9ZUmw+4jaGVyAZUuLKzWRvNdzj8wxtFENB1C1e3uLC2xiE71AJPB6/vVXV9MmvIkigeSKQDD7xnd96EaZouraXq8Fw0DGDOJHjO70nrkdfajCjehBMywueYwXE6KCOM5pr8J6gQjeZB5ihcCRW2umfb3rn2qzeVJgjvTd4Tu9mmSHb1IIz3oOmqKuJo6ViFYYz1Ct5HFJI587OT/OeaoPBbldhwf/mpxVDULjFw/wAmqhufmg2vhzgT1lOmDoMmGbe0RZMNOQjjaWz0HerDzw2oCRTBo14Uke1LMlyxUBXK4PXNV7i7zjJNV3sRgCSmkrLnMJ67qAuAsQn2BnHrUdKvW+jvashlUOkh9EoGd31+aU73D2xDHGeQfpXTPARjufDp0/UuRIhKSt1jPY1oaWkWoc9zy/zTBbQEPAksOnCEhbqPY+BwQKlkt41ONox9KCx3xjuzDNc7yjbQzNmmDWGigihWGUXKlQWZP5TSltLYPrEzqiDxKDRW7sQ0WSPaojHYiPZJBD9HUZopa2sPkB0dmkIzgnpVC7sY5Jds+Nx75oPhZRnMuWAOIPudF0u9jUxWy28qfzq2A31FB9T8LLOwBQbugYDFNq6XNHjE6FfZhV9jGsKqxVnHxxRdrkZJ5klxjEUvDWjL4Y/FStcCSa4QLt7IBz+9CdVvsuV/MORhuaYtXsxKGO8rke9ImqW09uzsp3BeQc1XbY7faO1amupOBzJb/XF06zj9Ctck8BeAB71SXxA+ov5dzM0aseijFL99K9xP6l/iGp7O0cMC7KP/ALMKfFSrXiKW6hnORHJbK1MY43q47k80jy+V+JkGSu1zsPcc8Uctr2WznERbfEe3sanuobS5kExhQydzjOaGjePuB3E9mVrHV4wqrcRsxUYBQ5Bos+uw+o3Ey7SBtRBn9aBXeiJMd1lMsTn/AJbnA+xoVdabe2ibp7dwv9QYMP1FGUI/RhhawEZLjW0nkSK3OxP5pG4xVDU9SuXYLYJmJON5/Mx9/pQBXIPWrthFeO3ohkYHoSMUTxY5nG1scQnaz6hNZgTFY4o12hcHJwMe9TWV5G7vE59Weh7GprPTr+Z8GJlz3Y0ds/DnkziW2aSIniTaPzj2OaXIL5GISi5wcseIDOi6heXfmwSGG3CgRsSRn34+tZXQ4NNmcZK44rKuKbiOpLPXnuMBtIT1RfuK8FhDnhAB9KnLVNgGPAOM9619oHqZO4wHqPh2zvQRNCj8d1oYPD9xZx+XYpmL+k9qaY4JEYnzNwPar0IVo8FRnPeqCpGHIjFWoes5E49q63MVw/nwuhz3FC5JztzzXa7qziuEZXjQn5FLt7pLISsFvCx7ZUDms+7QYORN2r53YoBWc2iinmt5riMZjiGWJ4oXPc9cGuixeGtTmlkN2U8h/wDlKMAVM/gu2YENaRH/APNCGmZT1Dj5jeDu4nNtKljur6KO6k9G7nJwDXSb29TR9JeWNhlhtXHzQ65/4d2sgPlxbPgGoLjwdqgtlgFzJJChyqO2cVo0ZRSAJ53V/wC19xM10GFIrWbVdQyWOSoY9aoQ+K7lZmUIpiJ9PPIrfU9O1wQiEo5jUYCgcUuS2N7CMPbyr84oOoUMuAIuq46j5Y+Krdrc7mcTbuFx6ce+f/FZd6nHOBO8pjIPHNISNJEAWRxx/TUk+oLLFsk3AjhRilEpJ7ljmdGt/ElsEVHuNx+TUkuvW2PTMorlUdyVbPP6VIbuSQnbuP0FcaTmW5j9fa9buMeZmlrUtRMysqMNtDIbPULk+m3kwe5FE7HwveTn/wBV6VPZetVFQHuECM0XlZWuMsMjNUplaOQhsDB4J710iz8GWWRuhkcj+pjR608HWAYM1jESOhddx/emK1ZjgCWKhezOSwTM+NoZiP6QTRO1s9Tkb+HZzYP9Q2/9a7Hb6FbwgCOGNMf0oBVpNKjHRR+lGOkYwfkScpt9D1R8Fo0j+rVdPhFrpla8mmZQMeXG21a6gmmxg/lH6VMtii/yCuTQEHM7zKDOf6f4UtYNvk2iAj+YjJ/ejcOghlKkbQe44pqW3Vf5RUixL/SKaTSKO5RtQT1F+w0CK1Xau9h7u2TRGLT44+i0RC5rYJzR1qRehAb2MgjgwOAP0rKtY9qyiYAkbjBBUVL0ArKygGWmVag6/avayrrJkbnLGteD1ArKyuhJ7WYB7V5WVwnT3A9hWzKPasrKuIJ+5q8SMfUoP2qF7C2fh4lP2rKyoYCVBMqS6NYOcNbr+lVZfDmlMebVP0Fe1lBKiEBOZAfDWk/+0T9BUkfh3S4/yWqD7CvKyhlR+S6ky3HpFmq8RdKni0+2H/LFe1lXRF/JzMf2WI7WGMYVBUwAHasrKOAAIBuTJFFbYHtWVlWkTw16tZWVM6e969xWVldOnqCtjxWVlUMkTTcfisrKyqEmExP/2Q=="
          alt="Vistienos salotos"

  "Vištos filė (vnt)": 1,
  "Kiaušinis (vnt)": 1,
  "Miltai (g)": 30,
  "Džiūvėsėliai (g)": 30,
  "Salotos (vnt)": 2,
  "Vyšniniai pomidorai (vnt)": 6,
  "Trumpavaisis agurkas (vnt)": 1,
  "Paprika (vnt)": 0.5,
  "Citrina (vnt)": 0.5,
  "Prieskoniai salotoms (a.š.)": 2,
  "Alyvuogių aliejus (v.š.)": 1,
};

const tortasSuMelynemis = {
  "Baltas šokoladas (g)": 160,
  "Kokoso aliejus (g)": 16,
  "Džiūvėsėliai (g)": 90,
  "Maskarponė (g)": 500,
  "Mėlynės (g)": 450,
  "Cukrus (g)": 80,
  "Želatina (g)": 15,
  "Vanduo (ml)": 100,
};

const makaronaiSuMesa = {
  "Veršiena (g)": 400,
  "Fetos sūris (g)": 100,
  "Kiaušiniai (vnt)": 1,
  "Makaronai (g)": 500,
  "Druska (a.š.)": 1,
  "Mėtos (vnt)": 2,
};

// Vienoje vietoje laikom visus receptus
const receptai = {
  vistienaSuSalotomis,
  tortasSuMelynemis,
  makaronaiSuMesa,
};

// ===== 2) HTML elementai =====
const portionRange = document.getElementById("portionRange");
const portionValue = document.getElementById("portionValue");
const ingredientList = document.getElementById("ingredientList");
const recipeTitle = document.getElementById("recipeTitle");
const recipeBtn = document.getElementById("recipeBtn");

const cards = document.querySelectorAll(".card");

// ===== 3) Pasirinktas receptas (default) =====
let selectedRecipeKey = null;

// ===== 4) Pagalbinė funkcija gražiam skaičiui =====
function formatQty(x) {
  // jei sveikas – nerodom .00
  if (Number.isInteger(x)) return String(x);
  // jei ne – rodome iki 2 skaičių po kablelio
  return x.toFixed(2).replace(/\.00$/, "");
}

// ===== 5) Atvaizduojam ingredientus pagal porcijas =====
function renderIngredients() {
  const portions = Number(portionRange.value);
  portionValue.textContent = portions;

  ingredientList.innerHTML = "";

  if (!selectedRecipeKey) {
    recipeTitle.textContent = "Pasirink receptą";
    return;
  }

  const recipeObj = receptai[selectedRecipeKey];
  recipeTitle.textContent =
    selectedRecipeKey === "vistienaSuSalotomis"
      ? "Vištiena su salotom"
      : selectedRecipeKey === "tortasSuMelynemis"
      ? "Tortas su mėlynėmis"
      : "Makaronai su mėsa";

  // Objektą paverčiam į poras: [pavadinimas, kiekis]
  for (const [ingredient, baseQty] of Object.entries(recipeObj)) {
    const li = document.createElement("li");
    const totalQty = baseQty * portions;
    li.textContent = `${ingredient}: ${formatQty(totalQty)}`;
    ingredientList.appendChild(li);
  }
}

// ===== 6) Recepto pasirinkimas paspaudus kortelę =====
cards.forEach((card) => {
  card.addEventListener("click", () => {
    selectedRecipeKey = card.dataset.recipe;

    // vizualiai pažymim aktyvią kortelę
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");

    renderIngredients();
  });
});

// ===== 7) Sliderio keitimas =====
portionRange.addEventListener("input", renderIngredients);

// ===== 8) Mygtukas – tiesiog padeda vartotojui (pasirenka pirmą receptą) =====
if (recipeBtn) {
  recipeBtn.addEventListener("click", () => {
    if (!selectedRecipeKey) {
      // jei dar nepasirinko – parenkam pirmą
      selectedRecipeKey = "vistienaSuSalotomis";
      cards.forEach((c) => c.classList.remove("active"));
      const first = document.querySelector(
        '.card[data-recipe="vistienaSuSalotomis"]'
      );
      if (first) first.classList.add("active");
    }
    renderIngredients();
  });
}

// ===== Start =====
renderIngredients();
