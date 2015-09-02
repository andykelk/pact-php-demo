<?php
require 'vendor/autoload.php';
$app = new \Slim\Slim();
$app->get('/alligators/:name', function ($name) use ($app) {
    $app->response->setStatus(200);
    $app->response()->headers->set('Content-Type', 'application/json');
    echo json_encode(array('name' => $name));
    //echo json_encode(array('firstname' => $name, 'lastname' => 'Alligator'));
});
$app->run();
