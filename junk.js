<!-- <script src="https://code.jquery.com/jquery-2.1.4.js"></script> -->
  <!-- <link href='http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css' rel='stylesheet' /> -->
  <!-- <script src='http://code.jquery.com/jquery-1.6.4.min.js' type='text/javascript'></script> -->
  <!-- <script src='http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js' type='text/javascript'></script> -->
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> -->
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css"> -->
  <!-- <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script> -->

  <!DOCTYPE html>
  <html ng-app="gemStore">
    <head>
      <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
      <script type="text/javascript" src="angular.min.js"></script>
      <script type="text/javascript" src="app.js"></script>
    </head>
    <body class="container" ng-controller="StoreController as store">
      <div class="product row" ng-hide="store.product.soldOut">
        <h3>
          {{store.product.name}}
          <em class="pull-right">${{store.product.price}}</em>
        </h3>
        <button ng-show="store.product.canPurchase">Add to Cart</button>
      </div>
    </body>
  </html>


Something
