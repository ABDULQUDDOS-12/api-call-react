import express from 'express';
const app = express();
app.get('/api/products',(req,res)=>{
    const products = [
      {
            id    : 1,
            name    :"iPhone 9",
            price    : 549,
            images    :  
              "https://www.google.com/imgres?q=iphone%209&imgurl=https%3A%2F%2Fcdn.homeshopping.pk%2Fproduct_images%2Fp%2F702%2FApple-iPhone-X-Buyers__21710_zoom.png&imgrefurl=https%3A%2F%2Fhomeshopping.pk%2Fproducts%2FApple-iPhone-9-Price-In-Pakistan.html&docid=zj93t4Z03m_gkM&tbnid=Oly9M4Gpdg1xyM&vet=12ahUKEwjokf32mLWHAxWm3wIHHcF7BJcQM3oECHcQAA..i&w=420&h=439&hcb=2&ved=2ahUKEwjokf32mLWHAxWm3wIHHcF7BJcQM3oECHcQAA"    
      },
      {
            id    : 2,
            name    :"iPhone X",
            price    : 899,
            images    :   
              "https://www.google.com/imgres?q=iphone%20x&imgurl=https%3A%2F%2Fstore.storeimages.cdn-apple.com%2F8756%2Fas-images.apple.com%2Fis%2FMTF82%3Fwid%3D1144%26hei%3D1144%26fmt%3Djpeg%26qlt%3D90%26.v%3D1535671758990&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fph%2Fshop%2Fproduct%2FMTF82FE%2FA%2Fiphone-xs-silicone-case-pink-sand&docid=MSGCDUtAR5O-_M&tbnid=XsiJKb5BVho-uM&vet=12ahUKEwiyos-HmbWHAxWP0wIHHa0MApUQM3oECB0QAA..i&w=1144&h=1144&hcb=2&ved=2ahUKEwiyos-HmbWHAxWP0wIHHa0MApUQM3oECB0QAA"    
      },
      {
            id    : 3,
            name    :     "Samsung Universe 9",
            price    : 1249,
            images    :   
              "https://www.google.com/imgres?q=samsung%20universe%209&imgurl=https%3A%2F%2Fm-cdn.phonearena.com%2Fimages%2Farticle%2F105726-wide-two_1200%2FThe-Samsung-Galaxy-Note-9-will-include-a-4000mAh-battery-confirms-tipster.jpg&imgrefurl=https%3A%2F%2Fwww.phonearena.com%2Fnews%2FSamsung-Galaxy-Note-9-battery-leak_id105726&docid=cd8GPIvyS1y2TM&tbnid=yHqjL6bdzmkC4M&vet=12ahUKEwjJhq2ZmbWHAxWq2AIHHfH7Ap4QM3oECBoQAA..i&w=680&h=383&hcb=2&ved=2ahUKEwjJhq2ZmbWHAxWq2AIHHfH7Ap4QM3oECBoQAA"    
      },
      {
            id    : 4,
            name    :     "OPPOF19",
            price    : 280,
            images    :   
              "https://www.google.com/imgres?q=oppoF19&imgurl=https%3A%2F%2Fpropakistani.pk%2Fprice%2Fwp-content%2Fuploads%2F2021%2F04%2FOppo-F19-price-1.png&imgrefurl=https%3A%2F%2Fpropakistani.pk%2Fprice%2Foppo-f19%2F&docid=JQkensWsRxi4IM&tbnid=GQa62i3IiI4HmM&vet=12ahUKEwjy8ta3mbWHAxWF9wIHHTS9ANsQM3oECBsQAA..i&w=400&h=599&hcb=2&itg=1&ved=2ahUKEwjy8ta3mbWHAxWF9wIHHTS9ANsQM3oECBsQAA"    
      },
      {
            id    : 5,
            name    :     "Huawei P30",
            price    : 499,
            images    :   
              "https://www.google.com/imgres?q=HUAWEI%20P30&imgurl=https%3A%2F%2Fconsumer.huawei.com%2Fcontent%2Fdam%2Fhuawei-cbg-site%2Fcommon%2Fmkt%2Flist-image%2Fphones%2Fp30%2FP30_skyblue.png&imgrefurl=https%3A%2F%2Fconsumer.huawei.com%2Fph%2Fphones%2Fp30%2Fbuy%2F&docid=tm8cbuq81xmWpM&tbnid=zlv1C621RfrSHM&vet=12ahUKEwiplcfFmbWHAxVIwQIHHQwKDxIQM3oECGsQAA..i&w=378&h=480&hcb=2&ved=2ahUKEwiplcfFmbWHAxVIwQIHHQwKDxIQM3oECGsQAA"    
      },
      {
            id    : 6,
            name    :     "MacBook Pro",
            price    : 1749,
            images    :   
              "https://www.google.com/imgres?q=MACBOOK%20PRO&imgurl=http%3A%2F%2Fregen.pk%2Fcdn%2Fshop%2Ffiles%2FREGEN-Macbook-pro-m1-2020-topview.png%3Fv%3D1682403635&imgrefurl=https%3A%2F%2Fregen.pk%2Fproducts%2Fmacbook-pro-2020-m1&docid=cqsfp6F6_cMwtM&tbnid=bDDNT8gBvVXVKM&vet=12ahUKEwjGndbYmbWHAxX5zwIHHbxpARIQM3oECB0QAA..i&w=2048&h=2048&hcb=2&ved=2ahUKEwjGndbYmbWHAxX5zwIHHbxpARIQM3oECB0QAA"    
      }]
      if(req.query.search){
        const filterProducts = products.filter(product=>product.name.includes(req.query.search))
        res.json(filterProducts);
        return;  
    }

      setTimeout(() => {
        res.json(products)
      }, 3000);
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Sever running on port ${port}`);
});
