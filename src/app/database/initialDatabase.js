const db = connect("mongodb://localhost:27017/tokpedplay");

db.videos.insertMany([
    {
        _id: ObjectId("64c292f928164efdaf31c7eb"),
        title: "Beli barang aneh yang dijual ONLINE episode 21!",
        embedUrl: "https://www.youtube.com/embed/_bH2aljdxNc",
        thumbnailUrl:
            "https://i.ytimg.com/vi/_bH2aljdxNc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtV3l8oT5vN5Re0aeabnlZZS8oxw",
        products: [
            ObjectId("64c292f928164efdaf31c7f0"),
            ObjectId("64c292f928164efdaf31c7f1"),
        ],
        comments: [ObjectId("64c292f928164efdaf31c7e1")],
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7ec"),
        title: "Beli barang aneh yang dijual ONLINE episode 22!",
        embedUrl: "https://www.youtube.com/embed/YppeEMFKcNk",
        thumbnailUrl:
            "https://i.ytimg.com/vi/YppeEMFKcNk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2SR2gdEp85UaEIjhRBsibzVPBBw",
        products: [ObjectId("64c292f928164efdaf31c7f2")],
        comments: [
            ObjectId("64c292f928164efdaf31c7e2"),
            ObjectId("64c292f928164efdaf31c7e3"),
        ],
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7ed"),
        title: "Beli barang aneh yang dijual ONLINE episode 23!",
        embedUrl: "https://www.youtube.com/embed/zaTS2Mf8s_0",
        thumbnailUrl:
            "https://i.ytimg.com/vi/zaTS2Mf8s_0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFVu6AZ7XppkuvtLQs-R7uU4EfDg",
        products: [],
        comments: [],
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7ee"),
        title: "Beli barang aneh yang dijual ONLINE episode 24!",
        embedUrl: "https://www.youtube.com/embed/uic5AyVYlI4",
        thumbnailUrl:
            "https://i.ytimg.com/vi/uic5AyVYlI4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKVE6KkRVRFluwKxTMQH9Jz1iP9Q",
        products: [
            ObjectId("64c292f928164efdaf31c7f3"),
            ObjectId("64c292f928164efdaf31c7f4"),
        ],
        comments: [],
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7ef"),
        title: "Beli barang aneh yang dijual ONLINE episode 25!",
        embedUrl: "https://www.youtube.com/embed/mnmziTKK-Wo",
        thumbnailUrl:
            "https://i.ytimg.com/vi/mnmziTKK-Wo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCT6u3gt_evKYJU6RJYnNUPIGd3vw",
        products: [ObjectId("64c292f928164efdaf31c7f5")],
        comments: [],
    },
]);

db.products.insertMany([
    {
        _id: ObjectId("64c292f928164efdaf31c7f0"),
        title: "Botol minyak goreng",
        price: 51500,
        productUrl: "https://tokopedia.link/LFujXRCuUmb",
        imageUrl:
            "https://images.tokopedia.net/img/cache/200-square/product-1/2020/1/18/24542431/24542431_e3f87f5e-89ad-4a91-88b9-f7eb9ec30108_500_500.webp?ect=4g",
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7f1"),
        title: "Slime jelly cleaner",
        price: 3500,
        productUrl: "https://tokopedia.link/Ag7L9sNuUmb",
        imageUrl:
            "https://images.tokopedia.net/img/cache/200-square/product-1/2020/6/16/13775870/13775870_1b063e52-fa10-41a3-abef-b4f7273d877b_700_700.webp?ect=4g",
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7f2"),
        title: "Pembuka botol",
        price: 7487,
        productUrl: "https://tokopedia.link/Jta7pqcyDnb",
        imageUrl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/6/5bc3dc9a-accf-4d8c-8124-b9c04fca33b8.jpg.webp?ect=4g",
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7f3"),
        title: "Penjepit plastik",
        price: 35000,
        productUrl: "https://tokopedia.link/Pcs8tNELGsb",
        imageUrl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/12/16/5a07a646-2060-4835-96a7-cdd6271e3e9d.jpg.webp?ect=4g",
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7f4"),
        title: "WC bersinar",
        price: 39900,
        productUrl: "https://tokopedia.link/etlSSjCLGsb",
        imageUrl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/7/31/0cc96530-fbf2-4c49-a6ee-281a92fc6fe1.png.webp?ect=4g",
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7f5"),
        title: "Lensa mikroskop",
        price: 675000,
        productUrl: "https://tokopedia.link/eONvuHRrOtb",
        imageUrl:
            "https://images.tokopedia.net/img/cache/200-square/attachment/2020/4/30/158825440208111/158825440208111_8ec3f9ce-4708-4dfc-926e-d49a676686f7.png.webp?ect=4g",
    },
]);

db.comments.insertMany([
    {
        _id: ObjectId("64c292f928164efdaf31c7e1"),
        username: "Anonym",
        text: "Nice products",
        createdAt: {
            $date: "2023-07-28T03:01:31.892Z",
        },
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7e2"),
        username: "Anonym",
        text: "Nice products",
        createdAt: {
            $date: "2023-07-28T03:01:31.892Z",
        },
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7e3"),
        username: "Anonym",
        text: "Nice products",
        createdAt: {
            $date: "2023-07-28T03:01:31.892Z",
        },
    },
]);
