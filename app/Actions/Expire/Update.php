<?php
/**
 * Created by PhpStorm.
 * User: tinaa
 * Date: 21/05/2021
 * Time: 07:33
 */

namespace App\Actions\Expire;

use App\Models\Expire;


class Update
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
