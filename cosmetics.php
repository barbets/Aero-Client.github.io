<?php
if (isset($_GET['uuid'])) {
    echo '{"uuid":"' . $_GET['uuid'] . '","username":null,"cosmetics":{"protected":{"name":"protected","type":"cape","scale":0.16,"active":true,"resourceLocation":"protected"},"orange_lava":{"name":"orange_lava","type":"cape","scale":0.16,"active":false,"resourceLocation":"orange_lava"},"black":{"name":"black","type":"dragon_wings","scale":0.13,"active":true,"resourceLocation":"black"},"indigo":{"name":"indigo","type":"dragon_wings","scale":0.13,"active":false,"resourceLocation":"indigo"}}}';
}
?>