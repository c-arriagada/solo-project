SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.restaurants (
    "id" serial NOT NULL,
    "name" varchar,
    "created_at" timestamp NOT NULL DEFAULT current_timestamp,
    "num_street" text NOT NULL,
    "city" varchar NOT NULL,
    "state" varchar NOT NULL,
    "zip_code" integer NOT NULL,
    CONSTRAINT "restaurants_pk" PRIMARY KEY ("id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.mochas (
    "id" serial NOT NULL,
    "created_at" timestamp NOT NULL DEFAULT current_timestamp,
    "photo" varchar,
    "description" text NOT NULL,
    "restaurant_id" bigint,
    CONSTRAINT "mochas_pk" PRIMARY KEY ("id"),
    CONSTRAINT "fk_restaurant" FOREIGN KEY ("restaurant_id") REFERENCES public.restaurants("id")
) WITH (
    OIDS = FALSE
);

CREATE TABLE public.reviews (
    "id" serial NOT NULL,
    "rating" integer NOT NULL,
    "comment" text,
    "mocha_id" bigint,
    "created_at" timestamp NOT NULL DEFAULT current_timestamp,
    "created_by" varchar,
    CONSTRAINT "reviews_pk" PRIMARY KEY ("id"),
    CONSTRAINT "fk_mocha" FOREIGN KEY ("mocha_id") REFERENCES public.mochas("id")
) WITH (
    OIDS=FALSE
);



