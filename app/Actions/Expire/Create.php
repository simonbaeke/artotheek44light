<?php
/**
 * Created by PhpStorm.
 * User: tinaa
 * Date: 14/03/2019
 * Time: 08:21
 */

namespace App\Actions\Expire;


use App\Models\Expire;

class Create
{
    public function execute(Array $attributes): Expire
    {
        $expire = new Expire([
            'expirable_type' => $attributes['expirable_type'],
            'expirable_id' => $attributes['expirable_id']]);

        if (!$expire->expirable->canBeRenewed()) {
            throw new \Exception('Kan niet verlengd worden');
        }

        $expire->date = $expire->expirable->renewDate();

        $expire->save();

        return $expire;
    }
}
