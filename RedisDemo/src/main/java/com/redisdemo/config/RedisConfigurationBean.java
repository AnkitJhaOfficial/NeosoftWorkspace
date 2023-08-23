//package com.redisdemo.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
//import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
//import org.springframework.data.redis.core.RedisTemplate;
//import org.springframework.data.redis.serializer.JdkSerializationRedisSerializer;
//import org.springframework.data.redis.serializer.StringRedisSerializer;
//
//@Configuration
//public class RedisConfigurationBean {
//
//    @Bean
//    LettuceConnectionFactory redisConnectionFactory(){
//        RedisStandaloneConfiguration configuration= new RedisStandaloneConfiguration();
//
//        return new LettuceConnectionFactory(configuration);
//    }
//
//    @Bean
//    RedisTemplate<String,Object> redisTemplate(){
//        RedisTemplate<String,Object> template = new RedisTemplate<>();
//        template.setConnectionFactory(redisConnectionFactory());
//        template.setKeySerializer(new StringRedisSerializer());
//        template.setHashKeySerializer(new JdkSerializationRedisSerializer());
//        template.setValueSerializer(new JdkSerializationRedisSerializer());
//        template.afterPropertiesSet();
//        return template;
//    }
//}
